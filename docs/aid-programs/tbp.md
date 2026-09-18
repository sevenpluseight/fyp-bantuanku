# Tabung Bantuan Perubatan (TBP)

## Overview
**Category:** Medical / Financial Assistance  
**Agency:** Kementerian Kesihatan Malaysia (KKM)  
**Program Status:** Active

## Eligibility Criteria
- Malaysian citizen
- Patient is from a poor or less-able socioeconomic group, subject to socioeconomic assessment and confirmation by a
  Medical Social Work Officer (Pegawai Kerja Sosial Perubatan, PKSP)
- Patient is receiving treatment and is referred by a KKM Government Hospital or Public University Medical Centre

## Benefits
**Assistance Type:** Medical financial assistance  
**Assistance Amount:** Part or all of the eligible medical cost, subject to assessment and approval

Assistance may be considered for:
- Medical treatment
- Medical equipment
- Rehabilitation equipment
- Medicines

The type and amount of assistance remain subject to the applicable medical, socioeconomic and TBP assessment

### Assistance Not Considered
Specific exclusions may apply according to the applicable TBP guidelines, medical requirements and assessment

## Required Documents
### Identification Documents
- Patient identification documents
- Parent / guardian identification documents, where applicable
- Other applicable identification documents required during the TBP assessment

### Income and Socioeconomic Documents
Where applicable:
- Income information and supporting documents
- Household / family financial information
- Information relating to applicable government or welfare assistance
- Information relating to other relevant financial circumstances
- Other supporting information required for socioeconomic assessment by the Medical Social Work Officer

### Medical / Application Documents
- Medical information relating to the patient's condition
- Information relating to the recommended treatment, medical equipment, rehabilitation equipment or medicine
- Medical Officer / Specialist referral or supporting medical information
- Applicable treatment, equipment or medicine cost information
- Other supporting documents required by the Medical Social Work Department or KKM

## Application Procedures
1. The patient is assessed by the treating Medical Officer / Specialist
2. The patient is referred to the Medical Social Work Department (Jabatan Kerja Sosial Perubatan) at a KKM Government
   Hospital or Public University Medical Centre
3. A Medical Social Work Officer conducts the applicable socioeconomic assessment
4. The required TBP application information, medical information and supporting documents are prepared
5. The Medical Social Work Officer submits the application through the Tabung Bantuan Perubatan System (STBP)
6. The application is assessed according to the applicable TBP eligibility, medical and socioeconomic requirements

**Application Method:** Referral and application through the Medical Social Work Department of a KKM Government Hospital
/ Public University Medical Centre  
**Official Application Platform:** https://stbp.moh.gov.my/index.php/auth/main_login

**Important:** STBP is used by the responsible hospital / Medical Social Work Officer in processing the application.
The current public information does not indicate that patients independently submit a TBP application through a public
online application portal

### Payment
Payment arrangements are subject to the applicable TBP assessment and approval process

## Application Period / Deadline
**Application Period:** No specific annual application period identified in the current publicly available TBP information
**Deadline:** No fixed annual application deadline identified  
**Important Requirement:** Patients should be referred through the applicable Medical Social Work Department for TBP
assessment and application

### Approval Validity
Approval validity and applicable processing requirements are subject to the current TBP assessment and approval process

## Required BantuanKu Profile Information
### Personal Information
- Full name
- MyKad / MyKid number
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
- Number of dependants
- Relationship of household members to the patient

### Financial / Socioeconomic Information
- Patient income
- Household / family income
- Employment status
- Occupation
- Number of dependants
- Applicable government / welfare assistance received
- Other information relevant to socioeconomic assessment

### Government Medical-Benefit Information
- Applicable government medical-benefit information, where relevant to the TBP assessment

### Medical Information
- Treating hospital / medical centre
- Medical condition / diagnosis
- Treating Medical Officer / Specialist
- Recommended treatment, medicine or equipment
- Type of assistance required
- Estimated treatment / medicine / equipment cost
- Hospital referral status

## TBP-Specific Application Information
Where applicable:
- Medical diagnosis
- Recommended treatment
- Requested medical equipment
- Requested rehabilitation equipment
- Requested medicine
- Estimated total cost
- Medical referral information
- Medical Officer / Specialist information
- Socioeconomic assessment information
- Cost / quotation information, where applicable
- Insurance / other financial assistance information, where applicable
- Other supporting information required according to the applicable medical and socioeconomic assessment

## Machine-Evaluable Rules
### TBP-001 - Preliminary Eligibility
**Conditions**
- Patient is a Malaysian citizen
- Patient is receiving treatment / referred by a KKM Government Hospital or Public University Medical Centre
- Patient belongs to a poor / less-able socioeconomic group, subject to further assessment  
**Expected Result:** Potentially suitable - further socioeconomic and medical assessment required - TBP

### TBP-002 - Socioeconomic Assessment Required
**Conditions**
- Patient satisfies the applicable preliminary requirements under TBP-001
- Poor / less-able socioeconomic status requires assessment and confirmation by a Medical Social Work Officer
**Expected Result:** Further assessment required - TBP

### TBP-003 - Medical Assessment Required
**Conditions**
- Patient satisfies the applicable preliminary requirements
- Treatment, medicine, equipment or other requested assistance requires professional or discipline-specific medical 
assessment  
**Expected Result:** Further assessment required - TBP

### TBP-004 - No Preliminary Match
**Conditions**
- Patient does not satisfy the applicable machine-evaluable preliminary requirements under TBP-001  
**Expected Result:** No preliminary match - TBP

## External-Verification Requirements
| Verification                                      | Official Source / Authority                                 | BantuanKu Implementation                      |
|---------------------------------------------------|-------------------------------------------------------------|-----------------------------------------------|
| Patient identity                                  | JPN / MyKad / MyKid                                         | Mock verification                             |
| Malaysian citizenship                             | Government record                                           | Mock verification                             |
| Household / family income                         | Supporting documents / PKSP assessment                      | User-provided information + mock verification |
| Poor / less-able socioeconomic status             | Medical Social Work Officer (PKSP)                          | Further assessment required                   |
| Hospital / medical-centre referral                | KKM Government Hospital / Public University Medical Centre  | Mock verification                             |
| Medical diagnosis                                 | Medical Officer / Specialist                                | User-provided information + document upload   |
| Treatment / medicine / equipment requirement      | Medical Officer / Specialist                                | Document upload + further assessment          |
| Medical appropriateness                           | Medical Officer / Specialist / applicable medical authority | Not independently verified                    |
| Socioeconomic assessment                          | PKSP                                                        | Not simulated                                 |
| Quotation / medical cost                          | Supplier / treatment provider                               | User-provided information + document upload   |
| Supporting document authenticity                  | Relevant authority                                          | Not verified                                  |
| Final approval                                    | KKM / applicable approving authority                        | Not simulated                                 |

### Mock Verification Notice
Mock verification uses fictional test records to simulate selected external verification processes for development,
demonstration and testing

BantuanKu does not access JPN, KKM, STBP, hospital or other official government databases. Mock verification results do
not represent official government, hospital or medical verification or approval

Medical assessment, socioeconomic assessment by a Medical Social Work Officer and final TBP approval remain outside the
BantuanKu simulation

BantuanKu provides preliminary guidance only. It does not independently determine whether an applicant is poor / less
able, medically suitable for a particular treatment or officially eligible for TBP

## Links / Sources
1. https://stbp.moh.gov.my/index.php/auth/main_login
2. https://www.perlindungansosial.gov.my/program/uEf2YK1rnl0MGUW7ijVZ
3. https://www.moh.gov.my/teras/bantuan-kesihatan/tabung-bantuan-perubatan-tbp
4. https://www.moh.gov.my/en/core/health-assistance/tabung-bantuan-perubatan-tbp
5. https://www.moh.gov.my/en/staff/muat-turun-borang/maklumat-dan-borang-permohonan-tabung-bantuan-perubatan
6. http://moh.gov.my/en/publications-and-reports/circulars

**Last Reviewed:** 20260915
