# BantuanKu Database Design

## Overview
BantuanKu uses **Supabase PostgreSQL** for persistent structured data and **Supabase Storage** for supporting documents.

The database is designed around reusable beneficiary information, program-specific information, user features, documents
and simulated applications.

Eligibility rules, derived eligibility facts and fictional mock government records are not stored in the database. These
are handled by the TypeScript eligibility and mock verification services.

## Tables
### `profiles`
| Field                | Type        | Description                              |
|----------------------|-------------|------------------------------------------|
| `id`                 | UUID        | Primary key                              |
| `user_id`            | UUID        | References `auth.users`                  |
| `full_name`          | TEXT        | Beneficiary's full name                  |
| `identification_no`  | TEXT        | Identification number used by the system |
| `date_of_birth`      | DATE        | Used to derive age                       |
| `gender`             | TEXT        | Gender                                   |
| `citizenship`        | TEXT        | Citizenship                              |
| `marital_status`     | TEXT        | Marital status                           |
| `occupation`         | TEXT        | Occupation, where applicable             |
| `employment_status`  | TEXT        | Employment status                        |
| `mobile_phone`       | TEXT        | Mobile phone number                      |
| `home_phone`         | TEXT        | Home phone number, where applicable      |
| `email`              | TEXT        | Email address, where applicable          |
| `preferred_language` | TEXT        | BM, English or Mandarin                  |
| `created_at`         | TIMESTAMPTZ | Record creation time                     |
| `updated_at`         | TIMESTAMPTZ | Last update time                         |

Age is derived from `date_of_birth` and is not stored separately.

### `addresses`
| Field             | Type        |
|-------------------|-------------|
| `id`              | UUID        |
| `user_id`         | UUID        |
| `address_type`    | TEXT        |
| `address_line_1`  | TEXT        |
| `address_line_2`  | TEXT        |
| `postcode`        | TEXT        |
| `city`            | TEXT        |
| `state_territory` | TEXT        |
| `country`         | TEXT        |
| `is_primary`      | BOOLEAN     |
| `created_at`      | TIMESTAMPTZ |
| `updated_at`      | TIMESTAMPTZ |

Federal Territory and Malaysian residence can be derived from the stored address information.

### `household_members`
| Field               | Type        |
|---------------------|-------------|
| `id`                | UUID        |
| `user_id`           | UUID        |
| `full_name`         | TEXT        |
| `identification_no` | TEXT        |
| `relationship`      | TEXT        |
| `date_of_birth`     | DATE        |
| `gender`            | TEXT        |
| `citizenship`       | TEXT        |
| `is_dependent`      | BOOLEAN     |
| `employment_status` | TEXT        |
| `occupation`        | TEXT        |
| `monthly_income`    | DECIMAL     |
| `is_student`        | BOOLEAN     |
| `study_mode`        | TEXT        |
| `institution_type`  | TEXT        |
| `is_oku`            | BOOLEAN     |
| `oku_registered`    | BOOLEAN     |
| `created_at`        | TIMESTAMPTZ |
| `updated_at`        | TIMESTAMPTZ |

Household size, number of dependants, child status and other household facts can be derived from these records.

### `financial_profiles`
| Field                      | Type        |
|----------------------------|-------------|
| `id`                       | UUID        |
| `user_id`                  | UUID        |
| `monthly_personal_income`  | DECIMAL     |
| `monthly_household_income` | DECIMAL     |
| `income_source`            | TEXT        |
| `created_at`               | TIMESTAMPTZ |
| `updated_at`               | TIMESTAMPTZ |

Per-capita household income is calculated by the eligibility engine and is not stored.

### `welfare_assistance`
| Field             | Type        |
|-------------------|-------------|
| `id`              | UUID        |
| `user_id`         | UUID        |
| `program_name`    | TEXT        |
| `agency`          | TEXT        |
| `assistance_type` | TEXT        |
| `monthly_amount`  | DECIMAL     |
| `is_active`       | BOOLEAN     |
| `start_date`      | DATE        |
| `end_date`        | DATE        |
| `created_at`      | TIMESTAMPTZ |
| `updated_at`      | TIMESTAMPTZ |

### `health_profiles`
| Field                           | Type        |
|---------------------------------|-------------|
| `id`                            | UUID        |
| `user_id`                       | UUID        |
| `is_oku`                        | BOOLEAN     |
| `oku_registered`                | BOOLEAN     |
| `disability_description`        | TEXT        |
| `has_chronic_illness`           | BOOLEAN     |
| `chronic_illness_details`       | TEXT        |
| `is_bedridden`                  | BOOLEAN     |
| `requires_continuous_treatment` | BOOLEAN     |
| `treatment_start_date`          | DATE        |
| `created_at`                    | TIMESTAMPTZ |
| `updated_at`                    | TIMESTAMPTZ |

Continuous-treatment duration can be derived from `treatment_start_date`.

### `caregivers`
| Field                        | Type        |
|------------------------------|-------------|
| `id`                         | UUID        |
| `user_id`                    | UUID        |
| `full_name`                  | TEXT        |
| `identification_no`          | TEXT        |
| `citizenship`                | TEXT        |
| `relationship`               | TEXT        |
| `provides_intensive_care`    | BOOLEAN     |
| `eligible_persons_cared_for` | INTEGER     |
| `created_at`                 | TIMESTAMPTZ |
| `updated_at`                 | TIMESTAMPTZ |

### `living_arrangements`
| Field                    | Type        |
|--------------------------|-------------|
| `id`                     | UUID        |
| `user_id`                | UUID        |
| `arrangement_type`       | TEXT        |
| `lives_with_family`      | BOOLEAN     |
| `depends_on_family`      | BOOLEAN     |
| `depends_on_caregiver`   | BOOLEAN     |
| `is_in_institution`      | BOOLEAN     |
| `institution_name`       | TEXT        |
| `institution_type`       | TEXT        |
| `receives_free_services` | BOOLEAN     |
| `receives_ration_grant`  | BOOLEAN     |
| `created_at`             | TIMESTAMPTZ |
| `updated_at`             | TIMESTAMPTZ |

### `aid_programs`
| Field                | Type        |
|----------------------|-------------|
| `id`                 | UUID        |
| `code`               | TEXT        |
| `name`               | TEXT        |
| `agency`             | TEXT        |
| `category`           | TEXT        |
| `description`        | TEXT        |
| `benefits`           | TEXT        |
| `application_method` | TEXT        |
| `official_url`       | TEXT        |
| `is_active`          | BOOLEAN     |
| `last_reviewed_at`   | DATE        |
| `created_at`         | TIMESTAMPTZ |
| `updated_at`         | TIMESTAMPTZ |

The initial BantuanKu V1.0 records are 
[STR](../aid-programs/str.md), 
[BWE](../aid-programs/bwe.md), 
[BA](../aid-programs/ba.md),
[BAT](../aid-programs/bat.md), 
[BPT](../aid-programs/bpt.md) and
[TBP](../aid-programs/tbp.md).

Eligibility rules are maintained in the TypeScript eligibility engine rather than this table.

### `program_profiles`
| Field        | Type        |
|--------------|-------------|
| `id`         | UUID        |
| `user_id`    | UUID        |
| `program_id` | UUID        |
| `data`       | JSONB       |
| `created_at` | TIMESTAMPTZ |
| `updated_at` | TIMESTAMPTZ |

A user should have at most one program profile for each aid program.

This allows program-specific questions to be added or modified without expanding the shared beneficiary tables.

### `saved_programs`
| Field        | Type        |
|--------------|-------------|
| `id`         | UUID        |
| `user_id`    | UUID        |
| `program_id` | UUID        |
| `created_at` | TIMESTAMPTZ |

The combination of `user_id` and `program_id` should be unique.

### `reminders`
| Field            | Type        |
|------------------|-------------|
| `id`             | UUID        |
| `user_id`        | UUID        |
| `program_id`     | UUID        |
| `application_id` | UUID        |
| `title`          | TEXT        |
| `description`    | TEXT        |
| `reminder_at`    | TIMESTAMPTZ |
| `is_completed`   | BOOLEAN     |
| `created_at`     | TIMESTAMPTZ |
| `updated_at`     | TIMESTAMPTZ |

`program_id` and `application_id` may be nullable depending on the reminder.

### `documents`
| Field               | Type        |
|---------------------|-------------|
| `id`                | UUID        |
| `user_id`           | UUID        |
| `document_type`     | TEXT        |
| `original_filename` | TEXT        |
| `storage_path`      | TEXT        |
| `mime_type`         | TEXT        |
| `file_size_bytes`   | BIGINT      |
| `issued_at`         | DATE        |
| `expires_at`        | DATE        |
| `created_at`        | TIMESTAMPTZ |
| `updated_at`        | TIMESTAMPTZ |

The actual files are stored in private Supabase Storage rather than PostgreSQL.

### `applications`
| Field                    | Type        |
|--------------------------|-------------|
| `id`                     | UUID        |
| `user_id`                | UUID        |
| `program_id`             | UUID        |
| `status`                 | TEXT        |
| `current_step`           | TEXT        |
| `created_at`             | TIMESTAMPTZ |
| `updated_at`             | TIMESTAMPTZ |
| `simulated_submitted_at` | TIMESTAMPTZ |

Application statuses may include:

- `draft`
- `in_progress`
- `ready_for_review`
- `simulated_submitted`

No government approval status is stored because BantuanKu does not perform actual government submission or approval.

### `application_data`
| Field            | Type        |
|------------------|-------------|
| `id`             | UUID        |
| `application_id` | UUID        |
| `data`           | JSONB       |
| `created_at`     | TIMESTAMPTZ |
| `updated_at`     | TIMESTAMPTZ |

Using JSONB allows different aid programs to collect different application information without creating separate 
application tables for each program.

### `application_documents`
| Field              | Type        |
|--------------------|-------------|
| `id`               | UUID        |
| `application_id`   | UUID        |
| `document_id`      | UUID        |
| `requirement_type` | TEXT        |
| `created_at`       | TIMESTAMPTZ |

The same document can therefore be reused across multiple simulated applications without storing duplicate files.

## Supabase Storage
Supporting documents are stored in a private Supabase Storage bucket.

```text
user-documents/
└── {user_id}/
    └── {document_id}/
        └── file
```

Only the document metadata and storage path are stored in PostgreSQL.

## Data Outside the Database
The following are intentionally not stored as persistent database records:
- Eligibility rules
- Eligibility recommendation results
- Intermediate rule evaluation state
- Derived age
- Derived household size
- Derived per-capita household income
- Fictional mock government records

Eligibility rules and calculations are handled by the TypeScript eligibility engine.

Fictional external records used for mock verification remain within the mock verification module and are clearly 
separated from actual user data.

## Extensibility
The database separates shared beneficiary information from program-specific information.

Shared information is stored in structured relational tables and can be reused across multiple programs. 
Program-specific eligibility information and application information use flexible JSONB structures where appropriate.

This allows additional aid programs and program-specific fields to be introduced without requiring major changes to the 
shared beneficiary schema.
