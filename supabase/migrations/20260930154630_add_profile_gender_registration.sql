alter table public.profiles
add constraint profiles_gender_check
check (
    gender is null
    or gender in ('male', 'female')
);

drop function public.complete_registration(
    text,
    text,
    date,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    numeric,
    numeric,
    text,
    jsonb
);

create function public.complete_registration(
    p_full_name text,
    p_identification_no text,
    p_date_of_birth date,
    p_citizenship text,
    p_mobile_phone text,
    p_email text,
    p_preferred_language text,
    p_employment_status text,

    p_address_line_1 text,
    p_address_line_2 text,
    p_postcode text,
    p_city text,
    p_state_territory text,
    p_gender text,

    p_monthly_personal_income numeric,
    p_monthly_household_income numeric,
    p_income_source text,

    p_household_members jsonb default '[]'::jsonb
)
returns uuid
language plpgsql
security invoker
set search_path = ''
as $$
declare
    v_user_id uuid;
    v_profile_id uuid;
    v_household_member jsonb;
begin
    -- Authentication
    v_user_id := auth.uid();

    if v_user_id is null then
        raise exception 'Authentication required';
    end if;

    -- Prevent duplicate registration
    if exists (
        select 1
        from public.profiles
        where user_id = v_user_id
    ) then
        raise exception 'Registration already completed';
    end if;

    -- Profile
    insert into public.profiles (
        user_id,
        full_name,
        identification_no,
        date_of_birth,
        gender,
        citizenship,
        mobile_phone,
        email,
        preferred_language,
        employment_status
    )
    values (
        v_user_id,
        trim(p_full_name),
        p_identification_no,
        p_date_of_birth,
        p_gender,
        p_citizenship,
        p_mobile_phone,
        lower(trim(p_email)),
        p_preferred_language,
        p_employment_status
    )
    returning id into v_profile_id;

    -- Residential Address
    insert into public.addresses (
        profile_id,
        address_line_1,
        address_line_2,
        postcode,
        city,
        state_territory,
        country_code,
        address_type,
        is_primary
    )
    values (
        v_profile_id,
        trim(p_address_line_1),
        nullif(trim(p_address_line_2), ''),
        p_postcode,
        trim(p_city),
        p_state_territory,
        'MY',
        'residential',
        true
    );

    -- Financial Profile
    insert into public.financial_profiles (
        profile_id,
        monthly_personal_income,
        monthly_household_income,
        income_source
    )
    values (
        v_profile_id,
        p_monthly_personal_income,
        p_monthly_household_income,
        p_income_source
    );

    -- Household Members
    if p_household_members is null then
        p_household_members := '[]'::jsonb;
    end if;

    if jsonb_typeof(p_household_members) <> 'array' then
        raise exception 'Household members must be a JSON array';
    end if;

    for v_household_member in
        select value
        from jsonb_array_elements(p_household_members)
    loop
        insert into public.household_members (
            profile_id,
            full_name,
            relationship,
            date_of_birth
        )
        values (
            v_profile_id,
            trim(v_household_member ->> 'full_name'),
            v_household_member ->> 'relationship',
            (v_household_member ->> 'date_of_birth')::date
        );
    end loop;

    -- Return newly created profile ID
    return v_profile_id;
end;
$$;

-- 4. Permissions
revoke all on function public.complete_registration(
    text,
    text,
    date,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    numeric,
    numeric,
    text,
    jsonb
) from public;

revoke all on function public.complete_registration(
    text,
    text,
    date,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    numeric,
    numeric,
    text,
    jsonb
) from anon;

grant execute on function public.complete_registration(
    text,
    text,
    date,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    numeric,
    numeric,
    text,
    jsonb
) to authenticated;
