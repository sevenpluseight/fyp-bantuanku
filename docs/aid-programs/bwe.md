# Bantuan Warga Emas (BWE)

## Overview
**Category:** Elderly Assistance  
**Agency:** JKM  
**Program Status:** Active

## Eligibility Criteria
- Malaysian citizen and residing in Malaysia
- Aged 60 years and above
- Household income does not exceed the current Hardcore Poor Household Average Poverty Line (PGK-Pendapatan Garis Kemiskinan)
or the current Hardcore
Poor Per-Capita Average PGK
- Not residing in a JKM-operated institution or a day/residential care centre that receives a ration grant and provides 
facilities or services free of charge

### Elderly Persons Without Children
An elderly person without children may still be considered for BWE when living with or depending on other family members 
or caregiver whose income exceeds the applicable PGK threshold

### Age Calculation
The applicant's age is calculated based on the year of birth

## Benefits
**Assistance Amount:** RM600/month per recipient

## Required Documents
- Copy of the applicant's MyKad
- Copies of MyKad / MyKid for family members living with the applicant
- Employer income statement / income declaration
- For self-employed applicants, an income declaration verified by an authorized community representative; or verification
through a Commissioner for Oaths
- Copy of a utility bill such as water, electricity or telephone bill for address verification
- Copy of the latest bank statement or current bank-account verification
- Other relevant supporting docs where required

## Application Procedures
### Online Application
1. Register an application through eBantuanJKM
2. Provide the required application information
3. Provide the applicable supporting docs to the relevant JKM office
4. The registered application undergoes investigation and means-tested assessment by JKM to determine eligibility

### Physical Application
1. Complete the JKM financial assistance application form
2. Prepare the applicable supporting docs
3. Submit the application to the relevant Pejabat Kebajikan Masyarakat Daerah / Jajahan / Bahagian / Cawangan
4. The registered application undergoes investigation and means-tested assessment by JKM to determine eligibility

**Application Method:** Online through eBantuanJKM or physical submission at district JKM offices  
**Official Application Platform:** https://ebantuanjkm.jkm.gov.my/spbk/login.jsp

## Application Period / Deadline
**Application Period:**  No specific annual application period identified in the official BWE sources reviewed  
**Deadline:**  No fixed application deadline identified  
**Notes:** BWE is administered as a monthly JKM financial assistance scheme. Applicants should refer to JKM or eBantuanJKM
for the latest application information and requirements

## Required BantuanKu Profile Information
### Personal Information
- Full name
- MyKad number
- Age / DOB
- Citizenship

### Contact Information
- Mobile phone number

### Residence Information
- Residential address
- Postcode
- City
- State
- Country of residence

### Household Information
- Household members
- Number of household members
- Relationship of household members to the applicant
- Whether the applicant has children
- Living arrangement
- Whether the applicant lives with family members or a caregiver

### Financial Information
- Applicant income
- Household income
- Household size
- Income source / employment status

### Care / Institution Information
- Whether the applicant currently resides in a JKM-operated institution
- Whether the applicant resides in a day or residential care centre
- Whether the care centre provides facilities or services free of charge
- Whether the care centre receives the applicable government ration grant

## BWE-Specific Application Information
Where applicable:
- Bank account information
- Income declaration details
- Caregiver information
- Details of current living arrangements
- Additional information requested by JKM during application

## Machine-Evaluable Rules
### BWE-001 - Standard Eligibility
**Conditions**
- Applicant is a Malaysian citizen
- Applicant resides in Malaysia
- Applicant is aged 60 years or above
- Applicant satisfies at least one of the applicable income conditions:
  - Household income does not exceed the current Hardcore Poor Household PGK; OR
  - Per-capita household income does not exceed the current Hardcore Poor Per-Capita PGK
- Applicant does not reside in:
  - A JKM-operated institution; OR
  - A day/residential care centre receiving the applicable government grant and providing facilities or services free of 
charge  
**Expected Result:** Preliminary match - BWE

### BWE-002 - Elderly Without Children Special Consideration
**Conditions**
- Applicant is a Malaysian citizen
- Applicant resides in Malaysia
- Applicant is aged 60 years or above
- Applicant has no children
- Applicant lives with or depends on another family member or caregiver
- The family member's or caregiver's income exceeds the applicable Hardcore Poor PGK threshold
- Applicant does not reside in an excluded institution or care centre as defined in BWE-001  
**Expected Result:** Further assessment required

### BWE-003 - No Preliminary Match
**Conditions**
- Applicant does not satisfy BWE-001 and does not meet the special consideration conditions under BWE-002  
**Expected Result:** Does not meet the published preliminary BWE criteria based on the information provided

### Current PGK Reference
Beginning 1 January 2026, JKM uses the PGK 2024 values as one of the conditions in determining eligibility for its 
financial assistance programs

For BantuanKu's 2026 preliminary eligibility assessment:
- Household PGK reference: RM1,236 per month
- Per-capita PGK reference: RM348 per month

The official BWE eligibility criteria require household income not to exceed the current applicable Household PGK or 
Per-Capita PGK threshold

These values are used by BantuanKu for preliminary rule-based assessment only
Final eligibility remains subject to JKM's investigation and assessment

## External-Verification Requirements
| Verification                     | Official Source / Authority               | BantuanKu Implementation                      |
|----------------------------------|-------------------------------------------|-----------------------------------------------|
| Applicant identity               | JPN / MyKad                               | Mock verification                             |
| Malaysian citizenship            | Government record                         | Mock verification                             |
| Household member identity        | JPN / MyKad / MyKid                       | Mock verification                             |
| Household income                 | Income documents / JKM assessment         | User-provided information + mock verification |
| Residential address              | Utility bill / supporting documents       | User-provided information + document upload   |
| Living arrangement               | Applicant information / JKM investigation | User-provided information                     |
| Institution / care-centre status | JKM / relevant care centre                | Mock verification                             |
| Supporting document authenticity | Relevant authority                        | Not verified                                  |
| Socioeconomic circumstances      | JKM investigation and assessment          | Not simulated                                 |
| Final approval                   | JKM                                       | Not simulated                                 |

### Mock Verification Notice
Mock verification uses fictional test records to simulate selected external verification processes for development, demo
and testing. JKM investigation, socioeconomic assessment and final approval remain outside the BantuanKu simulation

## Links / Sources
1. https://www.malaysia.gov.my/en/personas/keluarga-berpendapatan-rendah/mendapatkan-bantuan-asas/bantuan-warga-emas-bwe
2. https://www.jkm.gov.my/main/article/bantuan-bulanan
3. https://ebantuanjkm.jkm.gov.my/spbk/Awam/BorangPermohonan_Panduan.jsp
4. https://ebantuanjkm.jkm.gov.my/spbk/login.jsp
5. https://www.jkm.gov.my/jkm/uploads/files/Bahagian%20Kawalan%20Standard/Prosedur%20Perkhidmatan%20Bantuan%20Kewangan%20.pdf
6. https://www.dosm.gov.my/portal-main/release-content/poverty-in-malaysia-2024
7. https://www.parlimen.gov.my/files/hindex/pdf/DR-21012026.pdf

**Last Reviewed:** 20260914
