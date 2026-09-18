# Bantuan Am Persekutuan (BA)

## Overview
**Category:** General Welfare Assistance
**Agency:** JKM  
**Program Status:** Active

## Eligibility Criteria
- Malaysian citizens residing in Federal Territories
- Household income not exceeding the current Hardcore Poor Household Poverty Line (PGK) average or Hardcore Poor Per 
Capita PGK average
- Those in need and poor families not covered under other JKM monthly assistance schemes
- Other factors considered such as applicant's economic condition, health and dependents

## Benefits
**Assistance Amount:** Minimum RM150/month to maximum RM500/month per family

## Required Documents
- Copy of the applicant's MyKad
- Copies of identification docs for spouse, parents, children or other applicable family members living with the applicant
- Copies of birth certificates for children or family members living with the applicant, where applicable
- Copy of salary statement, where applicable
- Other relevant supporting docs where required

## Application Procedures
### Online Application
1. Register an application through eBantuanJKM
2. Provide the required application information
3. Provide the applicable supporting docs to the relevant JKM office
4. The registered application undergoes investigation and means-tested assessment by JKM to determine eligibility

## Physical Application
- Complete JKM financial assistance application form
- Prepare the applicable supporting docs
- Submit the application to the relevant Pejabat Kebajikan Masyarakat / Daerah / Jajahan / Bahagian / Cawangan
- The registered application undergoes investigation and means-tested assessment by JKM to determine eligibility

**Application Method:** Online through eBantuanJKM or physical submission  
**Official Application Platform:** https://ebantuanjkm.jkm.gov.my/spbk/login.jsp

## Application Period / Deadline
**Application Period:**  No specific annual application identified in the official BA sources reviewed  
**Deadline:**  No fixed application deadline found  
**Notes:** Applicants should refer to JKM or eBantuanJKM for the latest application information and requirements

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
- Federal Territory
- Country of residence

### Household Information
- Household members
- Number of household members
- Relationship of household members to the applicant
- Number of dependants
- Dependant information

### Financial Information
- Applicant income
- Household income
- Household size
- Income source / employment status

### Welfare Assistance Information
- Whether the applicant currently receives another JKM monthly assistance scheme
- Current JKM assistance program, where applicable

### Health Information
- Whether the applicant has health conditions that may affect their economic circumstances or need for assistance
- Relevant health information, where applicable

## BA-Specific Application Information
Where applicable:
- Details of current economic circumstances
- Details of dependants
- Details of existing JKM assistance
- Health-related information relevant to the application
- Additional information requested by JKM during application

## Machine-Evaluable Rules
### BA-001 - Preliminary Eligibility
**Conditions**
- Applicant is a Malaysian citizen
- Applicant resides in a Federal Territory
- Applicant satisfies at least one of the applicable income criteria:
    - Household income does not exceed the current applicable Household PGK; OR
    - Per-capita household income does not exceed the current applicable Per-Capita PGK
- Applicant is not currently covered under another JKM monthly assistance scheme  
**Expected Result:** Preliminary match - BA

### BA-002 - Further Assessment Required
**Conditions**
- Applicant satisfies the preliminary machine-evaluable requirements under BA-001
- Additional consideration of the applicant's economic circumstances, health, dependants or other relevant circumstances
is required  
**Expected Result:** Further assessment required - BA

### BA-003 - No Preliminary Match
**Conditions**
- Applicant does not satisfy the machine-evaluable requirements under BA-001  
**Expected Result:** No preliminary match - BA

### Current PGK Reference
Beginning 1 January 2026, JKM uses the PGK 2024 values as one of the conditions in determining eligibility for its 
financial assistance programs

For BantuanKu's 2026 preliminary eligibility assessment:
- Household PGK reference: RM1,236 per month
- Per-capita PGK reference: RM348 per month

The official BA eligibility criteria require household income not to exceed the current applicable Household PGK or 
Per-Capita PGK threshold

These values are used by BantuanKu for preliminary rule-based assessment only. Final eligibility remains subject to 
JKM's investigation and assessment

## External-Verification Requirements
| Verification                             | Official Source / Authority                                   | BantuanKu Implementation                      |
|------------------------------------------|---------------------------------------------------------------|-----------------------------------------------|
| Applicant identity                       | JPN / MyKad                                                   | Mock verification                             |
| Malaysian citizenship                    | Government record                                             | Mock verification                             |
| Household member identity                | JPN / MyKad / MyKid                                           | Mock verification                             |
| Household income                         | Income documents / JKM assessment                             | User-provided information + mock verification |
| Residence in Federal Territory           | Residential information / supporting documents                | User-provided information + document upload   |
| Existing JKM monthly assistance          | JKM records                                                   | Mock verification                             |
| Dependant information                    | Applicant information / supporting documents                  | User-provided information + mock verification |
| Health circumstances                     | Applicant information / supporting documents / JKM assessment | User-provided information + document upload   |
| Supporting document authenticity         | Relevant authority                                            | Not verified                                  |
| Economic and socioeconomic circumstances | JKM investigation and assessment                              | Not simulated                                 |
| Final approval                           | JKM                                                           | Not simulated                                 |

### Mock Verification Notice
Mock verification uses fictional test records to simulate selected external verification processes for development, 
demonstration and testing

BantuanKu does not access JPN, JKM or other official government databases. Mock verification results do not represent 
official government verification or approval

JKM investigation, socioeconomic assessment and final approval remain outside the BantuanKu simulation

These requirements are not used to make a definitive eligibility decision and may require verification by the 
responsible government agency or other authorized parties

## Links / Sources
1. https://www.malaysia.gov.my/en/personas/keluarga-berpendapatan-rendah/mendapatkan-bantuan-asas/bantuan-am-persekutuan-ba
2. https://ebantuanjkm.jkm.gov.my/spbk/login.jsp
3. https://www.dosm.gov.my/portal-main/release-content/poverty-in-malaysia-2024
4. https://www.jkm.gov.my/jkm/uploads/files/Bahagian%20Kawalan%20Standard/Prosedur%20Perkhidmatan%20Bantuan%20Kewangan%20.pdf

**Last Reviewed:** 20260915
