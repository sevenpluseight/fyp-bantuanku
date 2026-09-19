-- Initial DB Schema - as of 19/09/2026 17:13

-- 1. TABLES
-- Profiles
create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users (id) on delete cascade,
  full_name text not null,
  identification_no text not null unique,
  date_of_birth date not null,
  gender text,
  citizenship text not null,
  marital_status text,
  occupation text,
  employment_status text,
  mobile_phone text,
  home_phone text,
  email text,
  preferred_language text not null default 'en' check (preferred_language in ('en', 'ms', 'zh')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Addresses
create table public.addresses (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  address_line_1 text not null,
  address_line_2 text,
  address_type text not null default 'residential' check (
    address_type in ('residential', 'correspondence')
  ),
  postcode text not null check (postcode ~ '^[0-9]{5}$'),
  city text not null,
  state_territory text not null check (
    state_territory in (
      'Johor',
      'Kedah',
      'Kelantan',
      'Melaka',
      'Negeri Sembilan',
      'Pahang',
      'Perak',
      'Perlis',
      'Pulau Pinang',
      'Sabah',
      'Sarawak',
      'Selangor',
      'Terengganu',
      'Kuala Lumpur',
      'Labuan',
      'Putrajaya'
    )
  ),
  country_code text not null default 'MY' check (country_code = 'MY'),
  is_primary boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Household Members
create table public.household_members (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  full_name text not null,
  identification_no text unique,
  relationship text not null,
  date_of_birth date,
  gender text,
  citizenship text,
  is_dependent boolean,
  employment_status text,
  occupation text,
  monthly_income numeric(12, 2) check (monthly_income >= 0),
  is_student boolean,
  study_mode text,
  institution_type text,
  is_oku boolean,
  oku_registered boolean,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Financial Profiles
create table public.financial_profiles (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references public.profiles (id) on delete cascade,
  monthly_personal_income numeric(12, 2) check (monthly_personal_income >= 0),
  monthly_household_income numeric(12, 2) check (monthly_household_income >= 0),
  income_source text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Welfare Assistance
create table public.welfare_assistance (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  program_name text not null,
  agency text,
  assistance_type text,
  monthly_amount numeric(12, 2) check (monthly_amount >= 0),
  is_active boolean,
  start_date date,
  end_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (
    end_date is null
    or start_date is null
    or end_date >= start_date
  )
);

-- Health Profiles
create table public.health_profiles (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references public.profiles (id) on delete cascade,
  is_oku boolean,
  oku_registered boolean,
  disability_description text,
  has_chronic_illness boolean,
  chronic_illness_details text,
  is_bedridden boolean,
  requires_continuous_treatment boolean,
  treatment_start_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Caregivers
create table public.caregivers (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  full_name text not null,
  identification_no text unique,
  citizenship text,
  relationship text,
  provides_intensive_care boolean,
  eligible_persons_cared_for integer check (
    eligible_persons_cared_for is null
    or eligible_persons_cared_for >= 0
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Living Arrangements
create table public.living_arrangements (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references public.profiles (id) on delete cascade,
  arrangement_type text,
  lives_with_family boolean,
  depends_on_family boolean,
  depends_on_caregiver boolean,
  is_in_institution boolean,
  institution_name text,
  institution_type text,
  receives_free_services boolean,
  receives_ration_grant boolean,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Aid Programs
create table public.aid_programs (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name text not null,
  agency text not null,
  category text,
  description text,
  benefits text,
  application_method text,
  official_url text,
  is_active boolean not null default true,
  last_reviewed_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Program Profiles
create table public.program_profiles (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  program_id uuid not null references public.aid_programs (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (profile_id, program_id)
);

-- Saved Programs
create table public.saved_programs (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  program_id uuid not null references public.aid_programs (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (profile_id, program_id)
);

-- Documents
create table public.documents (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  document_type text not null,
  original_filename text not null,
  storage_path text not null unique,
  mime_type text not null,
  file_size_bytes bigint check (
    file_size_bytes is null
    or file_size_bytes >= 0
  ),
  issued_at date,
  expires_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (
    expires_at is null
    or issued_at is null
    or expires_at >= issued_at
  )
);

-- Applications
create table public.applications (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  program_id uuid not null references public.aid_programs (id) on delete restrict,
  status text not null default 'draft' check (
    status in (
      'draft',
      'in_progress',
      'ready_for_review',
      'simulated_submitted'
    )
  ),
  current_step text,
  simulated_submitted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Application Data
create table public.application_data (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null unique references public.applications (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Application Documents
create table public.application_documents (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications (id) on delete cascade,
  document_id uuid not null references public.documents (id) on delete restrict,
  requirement_type text not null,
  created_at timestamptz not null default now(),
  unique (application_id, document_id, requirement_type)
);

-- Reminders
create table public.reminders (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  program_id uuid references public.aid_programs (id) on delete cascade,
  application_id uuid references public.applications (id) on delete cascade,
  title text not null,
  description text,
  reminder_at timestamptz not null,
  is_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. updated_at TRIGGERS
create or replace function public.set_updated_at() returns trigger language plpgsql
set search_path = '' as $$ begin new.updated_at = now();
return new;
end;
$$;

-- Profiles
create trigger set_profiles_updated_at before
update on public.profiles for each row execute function public.set_updated_at();

-- Addresses
create trigger set_addresses_updated_at before
update on public.addresses for each row execute function public.set_updated_at();

-- Household Members
create trigger set_household_members_updated_at before
update on public.household_members for each row execute function public.set_updated_at();

-- Financial Profiles
create trigger set_financial_profiles_updated_at before
update on public.financial_profiles for each row execute function public.set_updated_at();

-- Welfare Assistance
create trigger set_welfare_assistance_updated_at before
update on public.welfare_assistance for each row execute function public.set_updated_at();

-- Health Profiles
create trigger set_health_profiles_updated_at before
update on public.health_profiles for each row execute function public.set_updated_at();

-- Caregivers
create trigger set_caregivers_updated_at before
update on public.caregivers for each row execute function public.set_updated_at();

-- Living Arrangements
create trigger set_living_arrangements_updated_at before
update on public.living_arrangements for each row execute function public.set_updated_at();

-- Aid Programs
create trigger set_aid_programs_updated_at before
update on public.aid_programs for each row execute function public.set_updated_at();

-- Program Profiles
create trigger set_program_profiles_updated_at before
update on public.program_profiles for each row execute function public.set_updated_at();

-- Documents
create trigger set_documents_updated_at before
update on public.documents for each row execute function public.set_updated_at();

-- Applications
create trigger set_applications_updated_at before
update on public.applications for each row execute function public.set_updated_at();

-- Application Data
create trigger set_application_data_updated_at before
update on public.application_data for each row execute function public.set_updated_at();

-- Reminders
create trigger set_reminders_updated_at before
update on public.reminders for each row execute function public.set_updated_at();

-- 3. INDEXES
-- Beneficiary Data
create index idx_addresses_profile_id on public.addresses (profile_id);
create index idx_household_members_profile_id on public.household_members (profile_id);
create index idx_welfare_assistance_profile_id on public.welfare_assistance (profile_id);
create index idx_caregivers_profile_id on public.caregivers (profile_id);

-- Program Profiles
create index idx_program_profiles_program_id on public.program_profiles (program_id);

-- Saved Programs
create index idx_saved_programs_program_id on public.saved_programs (program_id);

-- Documents
create index idx_documents_profile_id on public.documents (profile_id);

-- Applications
create index idx_applications_profile_id on public.applications (profile_id);
create index idx_applications_program_id on public.applications (program_id);

-- Application Documents
create index idx_application_documents_document_id on public.application_documents (document_id);

-- Reminders
-- create index idx_reminders_profile_id on public.reminders(profile_id);
create index idx_reminders_program_id on public.reminders (program_id);
create index idx_reminders_application_id on public.reminders (application_id);
create index idx_reminders_profile_reminder_at on public.reminders (profile_id, reminder_at);

-- 4. RLS (ROW LEVEL SECURITY)
alter table public.profiles enable row level security;
alter table public.addresses enable row level security;
alter table public.household_members enable row level security;
alter table public.financial_profiles enable row level security;
alter table public.welfare_assistance enable row level security;
alter table public.health_profiles enable row level security;
alter table public.caregivers enable row level security;
alter table public.living_arrangements enable row level security;
alter table public.aid_programs enable row level security;
alter table public.program_profiles enable row level security;
alter table public.saved_programs enable row level security;
alter table public.documents enable row level security;
alter table public.applications enable row level security;
alter table public.application_data enable row level security;
alter table public.application_documents enable row level security;
alter table public.reminders enable row level security;

-- 5. DATABASE GRANTS
revoke all on all tables in schema public
from anon,
  authenticated;
grant select,
  insert,
  update on public.profiles to authenticated;
grant select,
  insert,
  update,
  delete on public.addresses,
  public.household_members,
  public.financial_profiles,
  public.welfare_assistance,
  public.health_profiles,
  public.caregivers,
  public.living_arrangements,
  public.program_profiles,
  public.documents,
  public.applications,
  public.application_data,
  public.reminders to authenticated;
grant select on public.aid_programs to authenticated;
grant select,
  insert,
  delete on public.saved_programs,
  public.application_documents to authenticated;

-- 6. RLS POLICIES
-- Profiles
create policy "Users can view own profile" on public.profiles for
select to authenticated using (
    user_id = (
      select auth.uid()
    )
  );

create policy "Users can create own profile" on public.profiles for
insert to authenticated with check (
    user_id = (
      select auth.uid()
    )
  );

create policy "Users can update own profile" on public.profiles for
update to authenticated using (
    user_id = (
      select auth.uid()
    )
  ) with check (
    user_id = (
      select auth.uid()
    )
  );

-- create policy "Users can delete own profile"
--        on public.profiles
--        for delete
--         to authenticated
--         using (
--             user_id = (select auth.uid())
--         );

-- Addresses
create policy "Users can view own addresses" on public.addresses for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where public.profiles.id = addresses.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own addresses" on public.addresses for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = addresses.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can update own addresses" on public.addresses for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = addresses.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = addresses.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can delete own addresses" on public.addresses for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = addresses.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Household Members
create policy "Users can view own household members" on public.household_members for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = household_members.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own household members" on public.household_members for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = household_members.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can update own household members" on public.household_members for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = household_members.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = household_members.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can delete own household members" on public.household_members for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = household_members.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Financial Profiles
create policy "Users can view own financial profile" on public.financial_profiles for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = financial_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own financial profile" on public.financial_profiles for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = financial_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can update own financial profile" on public.financial_profiles for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = financial_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = financial_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can delete own financial profile" on public.financial_profiles for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = financial_profiles.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Welfare Assistance
create policy "Users can view own welfare assistance" on public.welfare_assistance for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = welfare_assistance.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own welfare assistance" on public.welfare_assistance for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = welfare_assistance.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can update own welfare assistance" on public.welfare_assistance for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = welfare_assistance.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = welfare_assistance.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can delete own welfare assistance" on public.welfare_assistance for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = welfare_assistance.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Health Profiles
create policy "Users can view own health profile" on public.health_profiles for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = health_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own health profile" on public.health_profiles for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = health_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can update own health profile" on public.health_profiles for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = health_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = health_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can delete own health profile" on public.health_profiles for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = health_profiles.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Caregivers
create policy "Users can view own caregivers" on public.caregivers for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = caregivers.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own caregivers" on public.caregivers for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = caregivers.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can update own caregivers" on public.caregivers for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = caregivers.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = caregivers.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can delete own caregivers" on public.caregivers for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = caregivers.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Living Arrangements
create policy "Users can view own living arrangement" on public.living_arrangements for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = living_arrangements.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own living arrangement" on public.living_arrangements for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = living_arrangements.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can update own living arrangement" on public.living_arrangements for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = living_arrangements.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = living_arrangements.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can delete own living arrangement" on public.living_arrangements for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = living_arrangements.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Aid Programs
create policy "Authenticated users can view active aid programs" on public.aid_programs for
select to authenticated using (is_active = true);

-- Program Profiles
create policy "Users can view own program profiles" on public.program_profiles for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = program_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own program profiles" on public.program_profiles for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = program_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
    and exists (
      select 1
      from public.aid_programs
      where aid_programs.id = program_profiles.program_id
        and aid_programs.is_active = true
    )
  );

create policy "Users can update own program profiles" on public.program_profiles for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = program_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = program_profiles.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
    and exists (
      select 1
      from public.aid_programs
      where aid_programs.id = program_profiles.program_id
        and aid_programs.is_active = true
    )
  );

create policy "Users can delete own program profiles" on public.program_profiles for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = program_profiles.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Saved Programs
create policy "Users can view own saved programs" on public.saved_programs for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = saved_programs.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can save own programs" on public.saved_programs for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = saved_programs.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
    and exists (
      select 1
      from public.aid_programs
      where aid_programs.id = saved_programs.program_id
        and aid_programs.is_active = true
    )
  );

create policy "Users can delete own saved programs" on public.saved_programs for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = saved_programs.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Documents
create policy "Users can view own documents" on public.documents for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = documents.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own documents" on public.documents for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = documents.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can update own documents" on public.documents for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = documents.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = documents.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can delete own documents" on public.documents for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = documents.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Applications
create policy "Users can view own applications" on public.applications for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = applications.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own applications" on public.applications for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = applications.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
    and exists (
      select 1
      from public.aid_programs
      where aid_programs.id = applications.program_id
        and aid_programs.is_active = true
    )
  );

create policy "Users can update own applications" on public.applications for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = applications.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = applications.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
    and exists (
      select 1
      from public.aid_programs
      where aid_programs.id = applications.program_id
        and aid_programs.is_active = true
    )
  );

create policy "Users can delete own applications" on public.applications for delete to authenticated using (
  exists (
    select 1
    from public.profiles
    where profiles.id = applications.profile_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Application Data
create policy "Users can view own application data" on public.application_data for
select to authenticated using (
    exists (
      select 1
      from public.applications
        join public.profiles on profiles.id = applications.profile_id
      where applications.id = application_data.application_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own application data" on public.application_data for
insert to authenticated with check (
    exists (
      select 1
      from public.applications
        join public.profiles on profiles.id = applications.profile_id
      where applications.id = application_data.application_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can update own application data" on public.application_data for
update to authenticated using (
    exists (
      select 1
      from public.applications
        join public.profiles on profiles.id = applications.profile_id
      where applications.id = application_data.application_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.applications
        join public.profiles on profiles.id = applications.profile_id
      where applications.id = application_data.application_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can delete own application data" on public.application_data for delete to authenticated using (
  exists (
    select 1
    from public.applications
      join public.profiles on profiles.id = applications.profile_id
    where applications.id = application_data.application_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Application Documents
create policy "Users can view own application documents" on public.application_documents for
select to authenticated using (
    exists (
      select 1
      from public.applications
        join public.profiles on profiles.id = applications.profile_id
      where applications.id = application_documents.application_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can attach own documents to own applications" on public.application_documents for
insert to authenticated with check (
    exists (
      select 1
      from public.applications
        join public.profiles on profiles.id = applications.profile_id
      where applications.id = application_documents.application_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
    and exists (
      select 1
      from public.documents
        join public.profiles on profiles.id = documents.profile_id
      where documents.id = application_documents.document_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can delete own application documents" on public.application_documents for delete to authenticated using (
  exists (
    select 1
    from public.applications
      join public.profiles on profiles.id = applications.profile_id
    where applications.id = application_documents.application_id
      and profiles.user_id = (
        select auth.uid()
      )
  )
);

-- Reminders
create policy "Users can view own reminders" on public.reminders for
select to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = reminders.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  );

create policy "Users can create own reminders" on public.reminders for
insert to authenticated with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = reminders.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
    and (
      reminders.program_id is null
      or exists (
        select 1
        from public.aid_programs
        where aid_programs.id = reminders.program_id
          and aid_programs.is_active = true
      )
    )
    and (
      reminders.application_id is null
      or exists (
        select 1
        from public.applications
          join public.profiles on profiles.id = applications.profile_id
        where applications.id = reminders.application_id
          and profiles.id = reminders.profile_id
          and profiles.user_id = (
            select auth.uid()
          )
      )
    )
  );

create policy "Users can update own reminders" on public.reminders for
update to authenticated using (
    exists (
      select 1
      from public.profiles
      where profiles.id = reminders.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
  ) with check (
    exists (
      select 1
      from public.profiles
      where profiles.id = reminders.profile_id
        and profiles.user_id = (
          select auth.uid()
        )
    )
    and (
      reminders.program_id is null
      or exists (
        select 1
        from public.aid_programs
        where aid_programs.id = reminders.program_id
          and aid_programs.is_active = true
      )
    )
    and (
      reminders.application_id is null
      or exists (
        select 1
        from public.applications
          join public.profiles on profiles.id = applications.profile_id
        where applications.id = reminders.application_id
          and profiles.id = reminders.profile_id
          and profiles.user_id = (
            select auth.uid()
          )
      )
    )
  );
