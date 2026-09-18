# Bantuan Penjagaan OKU Terlantar / Pesakit Kronik Terlantar (BPT)

## Overview
**Category:** Care / Financial Assistance  
**Agency:** JKM  
**Program Status:** Active

## Eligibility Criteria
- Malaysian citizen and residing in Malaysia
- Applicant falls under at least one of the following categories:
    - Caregiver providing intensive care to a bedridden OKU or bedridden chronic patient; OR
    - Non-bedridden chronic patient who requires continuous treatment for a minimum period of at least 3 months; OR
    - Bedridden OKU or bedridden chronic patient who has no caregiver or whose caregiver is not a Malaysian citizen, 
in which case the assistance may be provided in the patient's own name
- Monthly household income does not exceed RM5,000

**Notes:**
- A caregiver may care for more than one bedridden OKU, bedridden chronic patient or non-bedridden chronic patient
- The amount of assistance may depend on the number of eligible persons cared for by the caregiver

## Benefits
**Assistance Type:** Monthly assistance  
**Assistance Amount:** RM500 per month per recipient

## Required Documents
- Copy of the applicant's MyKad
- Copy of the MyKad / MyKid of the bedridden OKU, bedridden chronic patient or non-bedridden chronic patient
- Copies of MyKad / MyKid for family members living with the applicant
- Copy of the OKU card or temporary OKU registration slip, where applicable
- Income statement / employer income confirmation; OR
- Income declaration verified by an applicable community leader or Commissioner for Oaths, where applicable for 
self-employed applicants
- Medical treatment confirmation from a registered government/private medical specialist or medical officer
- For a non-bedridden chronic patient, medical confirmation that continuous treatment is required for at least 3 months
- Copy of a utility bill such as water, electricity, telephone or other applicable utility bill for address verification
- Copy of the latest bank-account statement / latest bank-account verification slip
- Other relevant supporting documents where required

**Medical Documentation Notes:**
- JKM may use an investigation report confirming that the person being cared for is a bedridden OKU or bedridden patient
- Medical confirmation may use the applicable JKM medical confirmation form or another suitable form of confirmation
- Current BPT information states that the medical confirmation letter must not be more than 2 years old

## Application Procedures
### Online Application
1. Register an application through eBantuanJKM
2. Provide the required application information
3. Attend the relevant JKM office within 14 days from the date of the online application
4. Bring and provide the applicable supporting documents
5. The registered application undergoes investigation and means-tested assessment by JKM to determine eligibility

Failure to attend the relevant JKM office within 14 days may result in the online application being automatically cancelled

**Online Availability:** The current eBantuanJKM online application is operated as a pilot and is available in Perlis,
WP Kuala Lumpur, WP Labuan, Selangor and Kedah

### Physical Application
1. Complete the applicable JKM financial assistance application
2. Prepare the required supporting documents
3. Submit the application to the relevant Pejabat Kebajikan Masyarakat Daerah / Jajahan / Bahagian
4. The registered application undergoes investigation and means-tested assessment by JKM to determine eligibility

**Application Method:** Online through eBantuanJKM or physical submission  
**Official Application Platform:** https://ebantuanjkm.jkm.gov.my/spbk/login.jsp

**Processing Information:** Current MyGovernment information lists an estimated service duration of 14–60 working days,
depending on the applicable category

## Application Period / Deadline
**Application Status:** Open  
**Application Period:** No specific annual application period identified in the official BPT sources reviewed  
**Deadline:** No fixed annual application deadline identified  
**Online Follow-Up Requirement:** Applicants applying through eBantuanJKM must attend the relevant JKM office within
14 days of the online application  
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
- State
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

### Patient Information
- Whether the applicant is the patient
- Patient's full name
- Patient's MyKad / MyKid number
- Patient's citizenship
- Relationship of the patient to the applicant, where applicable
- Whether the patient is an OKU
- OKU registration status, where applicable
- Whether the patient has a chronic illness
- Whether the patient is bedridden
- Whether the patient requires continuous treatment
- Duration of continuous treatment, where applicable

### Caregiver Information
Where applicable:
- Whether the patient has a caregiver
- Caregiver's full name
- Caregiver's MyKad number
- Caregiver's citizenship
- Relationship of the caregiver to the patient
- Whether the caregiver provides intensive care to the patient
- Number of eligible persons cared for by the caregiver

## BPT-Specific Application Information
Where applicable:
- Applicant's relationship to the patient
- Patient's medical condition
- Bedridden status
- Chronic illness information
- Continuous treatment requirement
- Duration of continuous treatment
- Medical confirmation / treatment information
- Medical specialist / medical officer information
- Caregiver arrangement
- Caregiver citizenship
- OKU information and registration status, where applicable
- Bank account information
- Supporting documents relating to the patient's medical condition
- Additional information requested by JKM during application

## Machine-Evaluable Rules
### BPT-001 - Caregiver of Bedridden Patient
**Conditions**
- Applicant is a Malaysian citizen
- Applicant resides in Malaysia
- Applicant is the caregiver of a bedridden OKU or bedridden chronic patient
- Applicant provides intensive care to the patient
- Monthly household income does not exceed RM5,000
**Expected Result:** Preliminary match - BPT

### BPT-002 - Non-Bedridden Chronic Patient
**Conditions**
- Applicant is a Malaysian citizen
- Applicant resides in Malaysia
- Applicant is a non-bedridden chronic patient
- Applicant requires continuous treatment for at least 3 months
- Monthly household income does not exceed RM5,000
**Expected Result:** Preliminary match - BPT

### BPT-003 - Bedridden Patient Without Eligible Malaysian Caregiver
**Conditions**
- Patient is a Malaysian citizen
- Patient resides in Malaysia
- Patient is a bedridden OKU or bedridden chronic patient
- Patient has no caregiver; OR
- Patient's caregiver is not a Malaysian citizen
- Monthly household income does not exceed RM5,000
**Expected Result:** Preliminary match - BPT in patient's own name

### BPT-004 - Further Assessment Required
**Conditions**
- Applicant satisfies the applicable preliminary requirements under BPT-001, BPT-002 or BPT-003
- Medical condition, bedridden status, continuous treatment requirement, caregiver arrangement or other supporting
  information requires assessment by JKM
**Expected Result:** Further assessment required - BPT

### BPT-005 - No Preliminary Match
**Conditions**
- Applicant does not satisfy the machine-evaluable requirements under BPT-001, BPT-002 or BPT-003
**Expected Result:** No preliminary match - BPT

## External-Verification Requirements
| Verification                         | Official Source / Authority                                | BantuanKu Implementation                       |
|--------------------------------------|------------------------------------------------------------|------------------------------------------------|
| Applicant identity                   | JPN / MyKad                                                | Mock verification                              |
| Applicant citizenship                | Government record                                          | Mock verification                              |
| Patient identity                     | JPN / MyKad / MyKid                                        | Mock verification                              |
| Patient citizenship                  | Government record                                          | Mock verification                              |
| Household member identity            | JPN / MyKad / MyKid                                        | Mock verification                              |
| Household income                     | Income information / supporting documents / JKM assessment | User-provided information + mock verification  |
| OKU registration, where applicable   | JKM                                                        | Mock verification                              |
| Chronic medical condition            | Registered medical specialist / medical officer            | User-provided information + document upload    |
| Bedridden status                     | Medical information / JKM assessment                       | User-provided information + document upload    |
| Continuous treatment requirement     | Registered medical specialist / medical officer            | Document upload                                |
| Continuous treatment duration        | Registered medical specialist / medical officer            | User-provided information + document upload    |
| Caregiver identity                   | JPN / MyKad                                                | Mock verification                              |
| Caregiver citizenship                | Government record                                          | Mock verification                              |
| Caregiver relationship / arrangement | Applicant information / JKM assessment                     | User-provided information + further assessment |
| Intensive care arrangement           | Applicant information / JKM assessment                     | User-provided information + further assessment |
| Supporting document authenticity     | Relevant authority                                         | Not verified                                   |
| Final approval                       | JKM                                                        | Not simulated                                  |

### Mock Verification Notice
Mock verification uses fictional test records to simulate selected external verification processes for development,
demonstration and testing

BantuanKu does not access JPN, JKM, medical or other official government databases. Mock verification results do not
represent official government verification or approval

Medical assessment, caregiver assessment, means-tested assessment and final JKM approval remain outside the BantuanKu
simulation

These requirements are not used to make a definitive eligibility decision and may require verification by the
responsible government agency, medical professional or other authorized parties

## Links / Sources
1. https://putera35.ekonomi.gov.my/program/bantuan-penjagaan-oku-terlantar-pesakit-kronik-terlantar-bpt/
2. https://ihsanmadani.gov.my/inisiatif/pendapatan/bantuan-penjagaan-oku-terlantar-pesakit-kronik-terlantar-pesakit-kronik-tidak
3. https://manfaat.mof.gov.my/b2026/individu/bpt
4. https://www.malaysia.gov.my/en/personas/oku/panduan-penjagaan-dan-bantuan-kesihatan-oku/bantuan-penjagaan-oku-terlantar-pesakit-kronik-terlantar-bpt
5. https://www.malaysia.gov.my/my/digital-services/permohonan-bantuan-penjagaan-oku-terlantar-bpt
6. https://ebantuanjkm.jkm.gov.my/spbk/login.jsp

**Last Reviewed:** 20260915
