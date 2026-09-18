# Sumbangan Tunai Rahmah (STR)

## Overview
**Category:** Financial Assistance  
**Agency:** LHDNM  
**Program Status:** Active

## Eligibility Criteria
### Recipient Categories
1. Households
- Malaysian citizens residing in Malaysia
- Gross monthly household income **RM5,000 and below**
- Married couples or single parents/widows/widowers with children who meet eligibility criteria

2. Elderly Without Spouse
- Malaysian citizens residing in Malaysia
- **60 years old and above**
- Gross monthly income **RM5,000 and below**
- Single, widowed or widowers without children

3. Single
- Malaysian citizens residing in Malaysia
- Single or single parents/widows/widowers without children
- Aged **21 to 59 years** (or **19 years and above for PWDs**)
- Not a full-time IPTA/IPTS student
- Gross monthly income **RM2,500 and below**

## Benefits
The STR 2026 assistance amount depends on the recipient category, gross
monthly household income and number of eligible children.

### Household - Monthly Household Income RM2,500 and Below
| Number of Children | Maximum STR / Year |
|--------------------|-------------------:|
| 0                  |              RM700 |
| 1 - 2              |            RM1,200 |
| 3 - 4              |            RM1,700 |
| 5 or more          |            RM2,200 |

### Household - Monthly Household Income RM2,501 to RM5,000
| Number of Children | Maximum STR / Year |
|--------------------|-------------------:|
| 0                  |              RM200 |
| 1 - 2              |              RM450 |
| 3 - 4              |              RM700 |
| 5 or more          |              RM950 |

### Elderly Without Spouse
| Monthly Income    | Maximum STR / Year |
|-------------------|-------------------:|
| RM5,000 and below |              RM600 |

### Single
Eligible recipients under the Single category receive RM600 per year
through Sumbangan Asas Rahmah (SARA), equivalent to RM50 per month.

### Payment Notes
STR payments are distributed in phases. The amount received depends on the
recipient's approved category and the phase from which the application is
approved. Payments from phases before the application was approved are not
included.

### Payment Methods
For applicable STR cash payments:

- Credit to the recipient's or spouse's registered bank account
- Cash collection at Bank Simpanan Nasional (BSN) where applicable such as
  where no bank account information is available or bank credit is unsuccessful

The Single category receives its RM600 annual assistance through SARA rather
than the standard STR cash payment method.

## Required Documents
Supporting documents depend on the applicant's circumstances.

### Applicant
Where applicable:
- Copy of Marriage Certificate issued by JAIN / JPN; OR
- Copy of spouse's Death Certificate issued by JPN; OR
- Copy of Divorce Certificate issued by JAIN / JPN; OR
- Copy of Decree Nisi / Decree Nisi Absolute issued by the Court

### Spouse
Where applicable:
- Copy of MyKad / MyPR / MyKAS; OR
- Copy of Passport / Visa / UNHCR Card / Border Pass / Birth Certificate /
  old Identification Card

### Biological Child
- Copy of MyKad / MyKid; and
- Copy of Birth Certificate issued by JPN

### Adopted Child
- Copy of MyKad / MyKid; and
- Copy of Adoption Registration Certificate issued by JPN

### BantuanKu Upload Requirements
BantuanKu requests applicable supporting documents based on the user's
circumstances as part of the simulated application workflow.

For documents uploaded through the official STR online application guide,
the supported file formats are:
- PDF
- JPG
- JPEG
- PNG

The maximum file size specified by the official STR application guide is
less than **3 MB** per uploaded document.

## Application Workflow
According to the STR 2026 guide in [Links / Sources](#links--sources) [3].
1. Applicant information
2. Spouse information, where applicable
3. Child information, where applicable
4. Supporting documents
5. Next-of-kin information
6. Confirmation and submission

**Application Method:** Online or paper form  
**Official Application Platform:** https://bantuantunai.hasil.gov.my/

## Application Period / Deadline
STR 2026 applications are open throughout the year beginning from 13 October 2025.

Applications may be submitted at any time during the year. Eligibility assessment is conducted in phases and applications
received after the cut-off date for a particular phase will be processed for a subsequent phase.

Refer to the official STR portal for the latest phase processing dates.

## Required BantuanKu Profile Information
### Personal Information
- Full name
- MyKad number
- Age / DOB
- Gender
- Mobile phone number
- Home phone number, if applicable
- Email address
- Occupation
- Marital status

### Address Information
- Correspondence address
- Postcode
- City
- State

### Household and Financial Information
- Gross monthly household income
- Spouse information, where applicable
- Child / dependant information, where applicable

### Spouse Information
Where the user is married:
- Identification type
- Identification number
- Full name
- Gender
- Mobile phone number
- Occupation

### Child / Dependant Information
Where applicable:
- Identification number
- Full name
- Age / DOB
- Relationship / child status

## STR-Specific Application Information
### Applicant
- Date of marriage, where marital status is Married
- Date of divorce, where marital status is Divorced
- Date of spouse's death, where marital status is Death of Spouse
- Bank name
- Active bank account number

### Spouse Information
Where applicable:
- Bank name
- Active bank account number

### Child
Where applicable:
- Child status:
  - Biological child (Anak kandung)
  - Adopted child (Anak angkat)

### Next of Kin
The user is asked whether next-of-kin information is available.

Options include:
- Has next of kin
- No next of kin
- Same as spouse

Where next-of-kin information is provided, BantuanKu collects:
- Relationship
- Identification type
- Identification number
- Full name
- Telephone number

Relationship options identified in the official STR application include:
- Spouse
- Parent
- Child
- Sibling
- Grandchild

## Machine-Evaluable Rules
### STR-001 - Household
**Conditions**
- Applicant is a Malaysian citizen
- Applicant resides in Malaysia
- Applicant works in Malaysia, where applicable
- Gross monthly household income is RM5,000 or below
- Applicant is either:
  - Married, with or without children; OR
  - Single parent/widow/widower with at least one eligible child
**Expected Result:** Potentially eligible under the Household category

### Eligible Child / Dependant
For the Household category, an eligible child must be:
- Be a biological child (including a child born out of wedlock) or an adopted child registered with JPN
- Be a Malaysian citizen with MyKad / MyKid
- Have no employment or source of income
- Be:
  - 18 years old or below; OR
  - 19 years old or above and studying full-time at an IPTA/IPTS

### STR-002 - Elderly Without Spouse
**Conditions**
- Citizenship is Malaysian
- Residence country is Malaysia
- Age is 60 years or above
- Gross monthly income is RM5,000 or below
- Applicant has no spouse
- Applicant has no eligible child / dependant
**Expected Result:** Potentially eligible under the Elderly Without Spouse category

### STR-003 - Single
**Conditions**
- Citizenship is Malaysian
- Residence country is Malaysia
- Applicant is single or a single parent/widow/widower without eligible children
- Gross monthly income is RM2,500 or below
- Applicant is not a full-time IPTA/IPTS student
- Applicant is:
  - 21 to 59 years old; OR
  - 19 to 59 years old and registered as a Person with Disabilities (PWD / OKU)
**Expected Result:** Potentially eligible under the Single category

### STR-004 - No Preliminary Match
**Conditions**
- The applicant does not satisfy all machine-evaluable conditions for any STR recipient category
**Expected Result:** Does not meet the published preliminary eligibility criteria based on the information provided

## External-Verification Requirements
| Verification             | Official Source            | BantuanKu Implementation |
|--------------------------|----------------------------|--------------------------|
| Applicant identity       | JPN                        | Mock verification        |
| Spouse identity          | JPN                        | Mock verification        |
| Child identity           | JPN                        | Mock verification        |
| OKU registration         | Government record          | Mock verification        |
| Student status           | Relevant records/documents | Mock verification        |
| Existing STR application | STR system                 | Mock verification        |
| Document authenticity    | Relevant authority         | Not verified             |
| Final approval           | LHDNM                      | Not simulated            |

## Links / Sources
1. https://www.malaysia.gov.my/en/personas/low-income-families/mendapatkan-bantuan-asas/rahmah-cash-contribution-str
2. https://bantuantunai.hasil.gov.my/FAQ/RISALAH%20STR%202026.pdf
3. https://bantuantunai.hasil.gov.my/Panduan%20Pengguna/PanduanPenggunaSTR2026_PermohonanBaharu.pdf
4. https://bantuantunai.hasil.gov.my/FAQ/FAQ%20PERMOHONAN%20STR%202026.pdf
5. https://bantuantunai.hasil.gov.my/FAQ/FAQ%20PEMBAYARAN%20STR%202026.pdf

**Last Reviewed:** 20260914
