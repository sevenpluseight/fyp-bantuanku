# Bantuan Alat Sokong / Alat Tiruan (BAT)

## Overview
**Category:** Financial Assistance  
**Agency:** JKM  
**Program Status:** Active

## Eligibility Criteria
- Malaysian citizen and residing in Malaysia
- Belongs to a JKM target group
- Household income does not exceed the current Poor Household Average Poverty Line (PGK) or current Poor Per-Capita Average
PGK
- Recommended by a government/private medical officer or medical specialist or a JKM officer according to the type of disability
- Other cases in need may be considered subject to KPKM approval

## Benefits
**Assistance Type:** One-off assistance  
**Assistance Amount:** Based on the actual determined cost of the required prosthetic or assistive equipment, subject 
to the applicable approval limit

- BAT/S assistance may be approved up to RM10,000 under the applicable BAT/S approval process
- Assistance exceeding RM10,000 and up to RM20,000 requires the applicable higher-level approval
- Current KPWKM information lists a maximum BAT/S assistance amount of RM20,000

## Required Documents
- Copy of the applicant's MyKad
- Copies of identification documents for family members living with the applicant, where applicable
- Copy of the applicant's registered OKU card or temporary OKU registration slip
- Household income statement / employer income confirmation / income declaration, where applicable
- Copy of a utility bill such as water, electricity, telephone or other applicable utility bill for address verification
- Medical confirmation, supporting letter or recommendation from a doctor / medical specialist
- Quotation for the requested prosthetic or assistive equipment
- Other relevant supporting documents where required

### Documentation After Assistance Payment
After BAT assistance has been approved and the assistance payment has been provided, the recipient may be required to 
provide documentation confirming the purchase of the approved prosthetic or assistive equipment:
- Acknowledgement of Receipt form
- Purchase receipt / invoice
- Photograph of the purchased prosthetic or assistive equipment
- Other applicable supporting documentation required by JKM

## Application Procedures
### Online Application
1. Register an application through eBantuanJKM
2. Provide the required application information
3. Attend the relevant JKM office within 14 days of the online application
4. Provide the applicable supporting documents
5. The application is assessed by JKM
6. Approval is subject to the applicable BAT/S approval authority  
**Processing Information:** JKM's service charter states that the status of BAT/S applications is communicated within 
30 days from the date a complete application is received (Refer to [Links / Sources](#links--sources) [5])

### Physical Application
1. Prepare the applicable application information and supporting documents
2. Submit the application to the nearest Pejabat Kebajikan Masyarakat Daerah / Jajahan / Bahagian
3. The application is assessed by JKM
4. Approval is subject to the applicable BAT/S approval authority

**Application Method:** Online through eBantuanJKM or physical submission  
**Official Application Platform:** https://ebantuanjkm.jkm.gov.my/spbk/login.jsp

## Application Period / Deadline
**Application Period:** No specific annual application period identified in
the official BAT sources reviewed  
**Deadline:** No fixed application deadline identified  
**Notes:** Applicants should refer to JKM or eBantuanJKM for the latest
application information and requirements.

## Required BantuanKu Profile Information
### Personal Information
- Full name
- MyKad number
- Date of birth / age
- Citizenship

### Contact Information
- Mobile phone number

### Residence Information
- Residential address
- Postcode
- City
- State
- Country of residence

### Financial Information
- Household income
- Household size
- Income source / employment status

### Disability / Assistive Support Information
- Type of disability or functional limitation
- Type of prosthetic or assistive equipment required
- Purpose of the requested equipment
- Whether the equipment has been recommended by an applicable medical professional or JKM officer

## BAT-Specific Application Information
Where applicable:
- Requested prosthetic or assistive equipment
- Estimated equipment cost
- Medical recommendation / referral information
- Recommending medical professional or JKM officer
- Equipment quotation
- Bank account information
- Supporting documents relating to the requested equipment
- Additional information requested by JKM during application

## Machine-Evaluable Rules
### BAT-001 - Preliminary Eligibility
**Conditions**
- Applicant is a Malaysian citizen
- Applicant resides in Malaysia
- Applicant belongs to a JKM target group
- Applicant satisfies at least one of the applicable income criteria:
    - Household income does not exceed the current Poor Household Average PGK; OR
    - Per-capita household income does not exceed the current Poor Per-Capita Average PGK
- Applicant has an applicable recommendation from a government/private medical officer, medical specialist or JKM officer
according to the type of disability  
**Expected Result:** Preliminary match - BAT

### BAT-002 - Further Assessment Required
**Conditions**
- Applicant satisfies the preliminary requirements under BAT-001
- The required recommendation, equipment suitability, cost or other supporting information requires assessment by JKM
**Expected Result:** Further assessment required - BAT

### BAT-003 - Higher Approval Required
**Conditions**
- Applicant satisfies the applicable eligibility requirements
- Equipment cost exceeds RM10,000 but does not exceed RM20,000
**Expected Result:** Further approval required - BAT

### BAT-004 - Special Consideration
**Conditions**
- Applicant does not fully satisfy the standard preliminary criteria
- Applicant may represent a case in need requiring consideration by KPKM
**Expected Result:** Further assessment required - BAT

### BAT-005 - No Preliminary Match
**Conditions**
- Applicant does not satisfy the machine-evaluable requirements under BAT-001
**Expected Result:** No preliminary match - BAT

## External-Verification Requirements
| Verification                      | Official Source / Authority                                | BantuanKu Implementation                       |
|-----------------------------------|------------------------------------------------------------|------------------------------------------------|
| Applicant identity                | JPN / MyKad                                                | Mock verification                              |
| Malaysian citizenship             | Government record                                          | Mock verification                              |
| Household income                  | Income information / supporting documents / JKM assessment | User-provided information + mock verification  |
| Disability / functional condition | Medical information / JKM assessment                       | User-provided information + document upload    |
| Medical recommendation            | Medical officer / medical specialist                       | Document upload                                |
| JKM officer recommendation        | JKM                                                        | Mock verification                              |
| Equipment suitability             | Medical professional / JKM                                 | Not independently verified                     |
| Equipment cost                    | Quotation / invoice                                        | User-provided information + document upload    |
| JKM target-group status           | JKM                                                        | User-provided information + further assessment |
| Supporting document authenticity  | Relevant authority                                         | Not verified                                   |
| Final approval                    | JKM / applicable approval authority                        | Not simulated                                  |

### Mock Verification Notice
Mock verification uses fictional test records to simulate selected external verification processes for development, 
demonstration and testing

BantuanKu does not access JPN, JKM or other official government databases. Mock verification results do not represent 
official government verification or approval

Professional assessment, equipment suitability and final JKM approval remain outside the BantuanKu simulation

## Links / Sources
1. https://ihsanmadaniv2.primuscore.com/inisiatif/pendapatan/bantuan-alat-tiruan-sokongan-bats
2. https://www.malaysia.gov.my/en/digital-services/permohonan-bantuan-alat-sokongan-alat-tiruan-bat
3. https://ebantuanjkm.jkm.gov.my/spbk/login.jsp
4. https://www.malaysia.gov.my/en/topics/bantuan-alat-sokongan-alat-tiruan-bat
5. https://kpwkm.gov.my/portal-main/article?id=piagam-pelanggan

**Last Reviewed:** 20260915
