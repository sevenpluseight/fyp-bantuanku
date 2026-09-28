alter table public.profiles
add constraint profiles_employment_status_check
check (
    employment_status is null
    or employment_status in (
        'employed',
        'self_employed',
        'unemployed',
        'retired',
        'not_working'
    )
);

alter table public.profiles
add constraint profiles_citizenship_check
check (
    citizenship in (
        'malaysian',
        'non_malaysian'
    )
);

alter table public.financial_profiles
add constraint financial_profiles_income_source_check
check (
    income_source is null
    or income_source in (
        'salary',
        'self_employment',
        'pension',
        'government_assistance',
        'family_support',
        'savings',
        'other',
        'no_income'
    )
);

alter table public.household_members
add constraint household_members_relationship_check
check (
    relationship in (
        'spouse',
        'child',
        'parent',
        'sibling',
        'grandchild',
        'other'
    )
);
