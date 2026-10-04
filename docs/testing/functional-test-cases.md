# BantuanKu Functional Test Cases

## Purpose
This document records the functional test cases used to verify that BantuanKu's implemented features operate according 
to the specified functional requirements.


## Test Status
| Status     | Description                                                     |
|------------|-----------------------------------------------------------------|
| Not Tested | Test case has not been executed                                 |
| Pass       | Actual result matches the expected result                       |
| Fail       | Actual result does not match the expected result                |
| Blocked    | Test cannot currently be completed due to a dependency or issue |

When a test fails, the related GitHub Issue should be recorded in the **Remarks** column. After the issue is resolved, 
the test should be executed again and the retest result recorded.

## Test Case Summary
| Module               | Test Cases |
|----------------------|-----------:|
| Login                |          5 |
| Registration         |         12 |
| Supporting Documents |         11 |
| Navigation           |          3 |
| **Total**            |     **31** |

---

## Login
| Test ID      | Test Case                     | Preconditions               | Test Data                                    | Expected Result                                                             | Actual Result | Status     | Remarks |
|--------------|-------------------------------|-----------------------------|----------------------------------------------|-----------------------------------------------------------------------------|---------------|------------|---------|
| FT-LOGIN-001 | Login with valid credentials  | Registered account exists   | Valid registered email and password          | User is authenticated successfully and enters the Main App                  | —             | Not Tested | —       |
| FT-LOGIN-002 | Login with incorrect password | Registered account exists   | Registered email and incorrect password      | Login is rejected and an appropriate invalid-credentials error is displayed | —             | Not Tested | —       |
| FT-LOGIN-003 | Login with unregistered email | Email is not registered     | Unregistered email and valid-format password | Login is rejected and an appropriate error is displayed                     | —             | Not Tested | —       |
| FT-LOGIN-004 | Submit invalid email format   | User is on the Login screen | Invalid email, e.g. `user@`                  | Email validation error is displayed and login is not submitted              | —             | Not Tested | —       |
| FT-LOGIN-005 | Submit empty login fields     | User is on the Login screen | Empty email and password                     | Required-field validation errors are displayed and login is not submitted   | —             | Not Tested | —       |

---

## Registration
| Test ID    | Test Case                                       | Preconditions                                                   | Test Data                                                        | Expected Result                                                                                                                             | Actual Result | Status     | Remarks |
|------------|-------------------------------------------------|-----------------------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------|------------|---------|
| FT-REG-001 | Register with valid information                 | No existing account or profile conflicts with the test data     | Valid and unique registration information                        | Auth account is created and associated profile, address and financial information are persisted successfully. User proceeds to the Main App | —             | Not Tested | —       |
| FT-REG-002 | Register using an existing email                | Auth account already exists for the test email                  | Existing registered email with otherwise valid registration data | Duplicate account is handled appropriately and a second unintended account or profile is not created                                        | —             | Not Tested | —       |
| FT-REG-003 | Register using an existing MyKad                | A profile already exists with the test MyKad                    | Existing MyKad and unique email                                  | Registration is rejected, user is returned to the relevant field or step, and a duplicate identification error is displayed                 | —             | Not Tested | —       |
| FT-REG-004 | Enter invalid registration email                | User is on the account registration step                        | Invalid email, e.g. `user@`                                      | Validation error is displayed and user cannot proceed until the email is corrected                                                          | —             | Not Tested | —       |
| FT-REG-005 | Enter invalid MyKad                             | User is on the personal information step                        | Invalid MyKad                                                    | Validation error is displayed and user cannot proceed until the MyKad is corrected                                                          | —             | Not Tested | —       |
| FT-REG-006 | Enter invalid mobile number                     | User is on the personal information step                        | Invalid mobile number                                            | Validation error is displayed and user cannot proceed until the mobile number is corrected                                                  | —             | Not Tested | —       |
| FT-REG-007 | Enter invalid date of birth                     | User is on the personal information step                        | Invalid date of birth according to current validation rules      | Validation error is displayed and the invalid date of birth is not accepted                                                                 | —             | Not Tested | —       |
| FT-REG-008 | Enter invalid postcode                          | User is on the residence step                                   | Postcode not matching the required five-digit format             | Validation error is displayed and user cannot proceed until the postcode is corrected                                                       | —             | Not Tested | —       |
| FT-REG-009 | Enter invalid income                            | User is on the household and income step                        | Invalid income value according to current validation rules       | Validation error is displayed and the invalid income value is not accepted                                                                  | —             | Not Tested | —       |
| FT-REG-010 | Add a household member                          | User is on the household and income step                        | Valid household member information                               | Household member remains included during registration and is persisted for the newly created profile                                        | —             | Not Tested | —       |
| FT-REG-011 | Complete registration without household members | Household members are optional under current registration rules | No household members                                             | Registration succeeds and no unintended household member record is created                                                                  | —             | Not Tested | —       |
| FT-REG-012 | Navigate backward between registration steps    | User has entered information in multiple registration steps     | Valid registration data                                          | Previously entered information remains available and can be edited                                                                          | —             | Not Tested | —       |

---

## Supporting Documents
| Test ID    | Test Case                                       | Preconditions                                                              | Test Data                                       | Expected Result                                                                                                                                                       | Actual Result | Status     | Remarks |
|------------|-------------------------------------------------|----------------------------------------------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|------------|---------|
| FT-DOC-001 | Select a valid PDF                              | User is on Registration Step 5                                             | Valid PDF ≤ 10 MB                               | PDF is accepted and displayed as the selected document                                                                                                                | —             | Not Tested | —       |
| FT-DOC-002 | Select a valid JPEG                             | User is on Registration Step 5                                             | Valid JPEG ≤ 10 MB                              | JPEG is accepted and displayed as the selected document                                                                                                               | —             | Not Tested | —       |
| FT-DOC-003 | Select a valid PNG                              | User is on Registration Step 5                                             | Valid PNG ≤ 10 MB                               | PNG is accepted and displayed as the selected document                                                                                                                | —             | Not Tested | —       |
| FT-DOC-004 | Select unsupported file type                    | User is on Registration Step 5                                             | File with MIME type other than PDF, JPEG or PNG | File is rejected and an appropriate unsupported-file-type error is displayed                                                                                          | —             | Not Tested | —       |
| FT-DOC-005 | Select file larger than 10 MB                   | User is on Registration Step 5                                             | Supported PDF, JPEG or PNG > 10 MB              | File is rejected and an appropriate file-size-limit error is displayed                                                                                                | —             | Not Tested | —       |
| FT-DOC-006 | Add multiple income documents                   | User is on Registration Step 5                                             | Two valid income documents                      | Both income documents remain selected because income proof supports multiple files                                                                                    | —             | Not Tested | —       |
| FT-DOC-007 | Replace a selected single document              | A single-file document section already has a selected document             | Two valid supported files                       | New file replaces the previous selection and only the replacement remains selected                                                                                    | —             | Not Tested | —       |
| FT-DOC-008 | Remove a selected document                      | A valid document is currently selected                                     | Any selected valid document                     | Document is removed from the selection without preventing registration                                                                                                | —             | Not Tested | —       |
| FT-DOC-009 | Complete registration without documents         | Steps 1–4 contain valid required data and no Step 5 documents are selected | No supporting documents                         | Registration succeeds because Step 5 supporting documents are optional                                                                                                | —             | Not Tested | —       |
| FT-DOC-010 | Complete registration with valid documents      | Steps 1–4 contain valid data and valid documents are selected              | Valid PDF, JPEG and/or PNG ≤ 10 MB              | Registration succeeds, files are uploaded to `user-documents`, and corresponding metadata records are created in `documents`                                          | —             | Not Tested | —       |
| FT-DOC-011 | Verify uploaded document ownership and metadata | Registration with documents has completed successfully                     | Previously uploaded registration documents      | Storage paths belong to the authenticated user and corresponding `documents` records contain the correct profile, document type, filename, MIME type and storage path | —             | Not Tested | —       |

---

## Navigation
| Test ID    | Test Case                                          | Preconditions                              | Test Data                                     | Expected Result                                                                                               | Actual Result | Status     | Remarks |
|------------|----------------------------------------------------|--------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------|---------------|------------|---------|
| FT-NAV-001 | Navigate to Main App after successful registration | User is completing a valid registration    | Valid registration data                       | Registration flow finishes and user is taken to the Main App                                                  | —             | Not Tested | —       |
| FT-NAV-002 | Restart app while authenticated and registered     | Registered user is currently authenticated | Existing authenticated and registered session | Valid session is restored and user reaches the Main App without repeating registration                        | —             | Not Tested | —       |
| FT-NAV-003 | Logout from the application                        | Registered user is logged in               | Authenticated registered user                 | Session ends, protected Main App content is no longer accessible, and user returns to the authentication flow | —             | Not Tested | —       |

---

## Future Test Coverage
Additional functional test cases will be added as the corresponding BantuanKu features are completed:
- Profile management
- Eligibility matching
- Personalized aid recommendations
- Aid program details
- Application guidance
- Application document requirements
- Reminders and deadlines, if implemented
- Language switching and localization
- Full application workflow and regression testing

After the implemented functional requirements have been verified, User Acceptance Testing (UAT) will be conducted 
separately with representative users using predefined realistic tasks and a structured questionnaire, in accordance 
with the testing approach specified in the IR.
