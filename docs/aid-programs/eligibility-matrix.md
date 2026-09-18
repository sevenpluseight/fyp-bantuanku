# BantuanKu Eligibility Matrix

## Overview
This document consolidates the machine-evaluable eligibility conditions from the six locked BantuanKu V1.0 program documents.

The matrix supports BantuanKu's rule-based forward chaining eligibility engine. It distinguishes information evaluated 
from the beneficiary profile, information handled through fictional mock verification, and conditions requiring further 
assessment by the responsible authority or professional.

BantuanKu provides preliminary eligibility guidance only. A preliminary match does not represent official eligibility, 
verification or approval.

## Program Summary
| Code | Program                                                    | Agency | Primary Eligibility Basis                                            |
|------|------------------------------------------------------------|--------|----------------------------------------------------------------------|
| STR  | Sumbangan Tunai Rahmah                                     | LHDNM  | Recipient category, income, age, marital / dependant status          |
| BWE  | Bantuan Warga Emas                                         | JKM    | Age, income, living / institutional arrangement                      |
| BA   | Bantuan Am Persekutuan                                     | JKM    | Federal Territory residence, income, existing JKM assistance         |
| BAT  | Bantuan Alat Sokong / Alat Tiruan                          | JKM    | JKM target group, income, assistive-equipment recommendation         |
| BPT  | Bantuan Penjagaan OKU Terlantar / Pesakit Kronik Terlantar | JKM    | Patient / caregiver circumstances, medical condition, income         |
| TBP  | Tabung Bantuan Perubatan                                   | KKM    | Citizenship, hospital referral, socioeconomic and medical assessment |

## Core Eligibility Matrix
Legend:
- **R** - Required for preliminary rule evaluation
- **C** - Conditional; required only for an applicable category or circumstance
- **A** - Used for further assessment / application assistance rather than a definitive preliminary decision
- **/** - Not required by the documented preliminary rules

| Profile / Eligibility Field                     | STR | BWE | BA | BAT | BPT | TBP |
|-------------------------------------------------|:---:|:---:|:--:|:---:|:---:|:---:|
| Malaysian citizenship                           |  R  |  R  | R  |  R  |  R  |  R  |
| Residence in Malaysia                           |  R  |  R  | /  |  R  |  R  |  /  |
| Residence in Federal Territory                  |  /  |  /  | R  |  /  |  /  |  /  |
| Age / date of birth                             |  R  |  R  | /  |  /  |  /  |  /  |
| Marital status                                  |  R  |  /  | /  |  /  |  /  |  /  |
| Household income                                |  R  |  R  | R  |  R  |  R  |  A  |
| Household size                                  |  C  |  R  | R  |  R  |  C  |  A  |
| Per-capita household income                     |  /  |  R  | R  |  R  |  /  |  /  |
| Child / dependant information                   |  R  |  C  | A  |  /  |  C  |  A  |
| Eligible child status                           |  C  |  /  | /  |  /  |  /  |  /  |
| Full-time student status                        |  C  |  /  | /  |  /  |  /  |  /  |
| OKU status / registration                       |  C  |  /  | /  |  C  |  C  |  /  |
| Existing JKM monthly assistance                 |  /  |  /  | R  |  /  |  /  |  /  |
| JKM target-group status                         |  /  |  /  | /  |  R  |  /  |  /  |
| Institution / care-centre status                |  /  |  R  | /  |  /  |  /  |  /  |
| Has children                                    |  /  |  C  | /  |  /  |  /  |  /  |
| Living with / depending on family or caregiver  |  /  |  C  | /  |  /  |  C  |  /  |
| Patient / applicant relationship                |  /  |  /  | /  |  /  |  R  |  /  |
| Patient bedridden status                        |  /  |  /  | /  |  /  |  R  |  /  |
| Chronic illness                                 |  /  |  /  | /  |  /  |  R  |  /  |
| Continuous treatment required                   |  /  |  /  | /  |  /  |  C  |  /  |
| Continuous treatment duration                   |  /  |  /  | /  |  /  |  C  |  /  |
| Has caregiver                                   |  /  |  /  | /  |  /  |  C  |  /  |
| Caregiver citizenship                           |  /  |  /  | /  |  /  |  C  |  /  |
| Intensive-care arrangement                      |  /  |  /  | /  |  /  |  C  |  /  |
| Medical / JKM recommendation                    |  /  |  /  | /  |  R  |  A  |  /  |
| Requested assistive equipment                   |  /  |  /  | /  |  C  |  /  |  /  |
| Equipment cost                                  |  /  |  /  | /  |  C  |  /  |  A  |
| KKM / Public University Medical Centre referral |  /  |  /  | /  |  /  |  /  |  R  |
| Poor / less-able socioeconomic status           |  /  |  /  | /  |  /  |  /  |  A  |
| Medical diagnosis / condition                   |  /  |  /  | A  |  A  |  A  |  A  |
| Recommended treatment / medicine / equipment    |  /  |  /  | /  |  A  |  /  |  A  |

## Program Rule Matrix

| Rule    | Main Conditions                                                                                                                                                                | BantuanKu Result                                                    |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| STR-001 | Malaysian; resides in Malaysia; household income ≤ RM5,000; married or qualifying single parent / widow(er) with eligible child                                                | Potentially eligible — Household                                    |
| STR-002 | Malaysian; resides in Malaysia; age ≥ 60; income ≤ RM5,000; no spouse; no eligible child / dependant                                                                           | Potentially eligible — Elderly Without Spouse                       |
| STR-003 | Malaysian; resides in Malaysia; single / applicable status without eligible children; income ≤ RM2,500; not full-time IPTA/IPTS student; age 21–59 or registered OKU age 19–59 | Potentially eligible — Single                                       |
| STR-004 | Does not satisfy any STR recipient category                                                                                                                                    | No preliminary match                                                |
| BWE-001 | Malaysian; resides in Malaysia; age ≥ 60; household or per-capita income within applicable PGK; not in excluded institution / care centre                                      | Preliminary match — BWE                                             |
| BWE-002 | Malaysian; resides in Malaysia; age ≥ 60; no children; depends on family / caregiver whose income exceeds PGK; not in excluded institution / care centre                       | Further assessment required — BWE                                   |
| BWE-003 | Does not satisfy BWE-001 or BWE-002                                                                                                                                            | No preliminary match                                                |
| BA-001  | Malaysian; resides in Federal Territory; household or per-capita income within applicable PGK; not covered by another JKM monthly assistance scheme                            | Preliminary match — BA                                              |
| BA-002  | Meets BA-001 but economic, health, dependant or other circumstances require JKM consideration                                                                                  | Further assessment required — BA                                    |
| BA-003  | Does not satisfy BA-001                                                                                                                                                        | No preliminary match                                                |
| BAT-001 | Malaysian; resides in Malaysia; JKM target group; household or per-capita income within applicable PGK; applicable medical / JKM recommendation                                | Preliminary match — BAT                                             |
| BAT-002 | Meets BAT-001 but recommendation, equipment suitability, cost or supporting information requires JKM assessment                                                                | Further assessment required — BAT                                   |
| BAT-003 | Applicable eligibility met and equipment cost > RM10,000 and ≤ RM20,000                                                                                                        | Further approval required — BAT                                     |
| BAT-004 | Does not fully satisfy standard criteria but may represent a case in need for KPKM consideration                                                                               | Further assessment required — BAT                                   |
| BAT-005 | Does not satisfy BAT-001                                                                                                                                                       | No preliminary match                                                |
| BPT-001 | Malaysian; resides in Malaysia; caregiver providing intensive care to bedridden OKU / chronic patient; household income ≤ RM5,000                                              | Preliminary match — BPT                                             |
| BPT-002 | Malaysian; resides in Malaysia; non-bedridden chronic patient; continuous treatment ≥ 3 months; household income ≤ RM5,000                                                     | Preliminary match — BPT                                             |
| BPT-003 | Malaysian bedridden OKU / chronic patient residing in Malaysia; no caregiver or caregiver is non-Malaysian; household income ≤ RM5,000                                         | Preliminary match — BPT in patient's own name                       |
| BPT-004 | Meets an applicable preliminary BPT rule but medical / caregiver information requires JKM assessment                                                                           | Further assessment required — BPT                                   |
| BPT-005 | Does not satisfy BPT-001, BPT-002 or BPT-003                                                                                                                                   | No preliminary match                                                |
| TBP-001 | Malaysian; receiving treatment / referred by KKM Government Hospital or Public University Medical Centre; poor / less-able status subject to assessment                        | Potentially suitable — further socioeconomic and medical assessment |
| TBP-002 | Preliminary requirements met; poor / less-able status requires PKSP assessment                                                                                                 | Further assessment required — TBP                                   |
| TBP-003 | Preliminary requirements met; requested treatment / medicine / equipment requires professional medical assessment                                                              | Further assessment required — TBP                                   |
| TBP-004 | Does not satisfy TBP-001                                                                                                                                                       | No preliminary match                                                |

## 2026 Threshold Reference
| Program                      | Threshold Used for Preliminary Assessment                                                         |
|------------------------------|---------------------------------------------------------------------------------------------------|
| STR — Household              | Gross monthly household income ≤ RM5,000                                                          |
| STR — Elderly Without Spouse | Gross monthly income ≤ RM5,000                                                                    |
| STR — Single                 | Gross monthly income ≤ RM2,500                                                                    |
| BWE                          | Household PGK RM1,236/month OR per-capita PGK RM348/month                                         |
| BA                           | Household PGK RM1,236/month OR per-capita PGK RM348/month                                         |
| BAT                          | Current applicable Poor Household Average PGK OR Poor Per-Capita Average PGK as documented in BAT |
| BPT                          | Monthly household income ≤ RM5,000                                                                |
| TBP                          | No fixed numeric threshold documented; socioeconomic status requires PKSP assessment              |

The BWE and BA PGK values are used by BantuanKu for 2026 preliminary assessment only. Final eligibility remains subject to JKM investigation and assessment.

## Verification Matrix
| Verification / Assessment         |          STR          |        BWE         |                BA                 |              BAT               |             BPT              |              TBP              |
|-----------------------------------|:---------------------:|:------------------:|:---------------------------------:|:------------------------------:|:----------------------------:|:-----------------------------:|
| Identity                          |         Mock          |        Mock        |               Mock                |              Mock              |             Mock             |             Mock              |
| Citizenship                       |         Mock          |        Mock        |               Mock                |              Mock              |             Mock             |             Mock              |
| Household / family identity       |         Mock          |        Mock        |               Mock                |               —                |             Mock             |               —               |
| Household / family income         |        Profile        |   Profile + Mock   |          Profile + Mock           |         Profile + Mock         |        Profile + Mock        |        Profile + Mock         |
| OKU registration                  |         Mock          |         —          |                 —                 |               —                |    Mock where applicable     |               —               |
| Student status                    |         Mock          |         —          |                 —                 |               —                |              —               |               —               |
| Existing program / JKM assistance | Mock for existing STR |         —          |               Mock                |               —                |              —               |               —               |
| Residence / address               |        Profile        | Profile + document |        Profile + document         |            Profile             |           Profile            |            Profile            |
| Institution / care-centre status  |           —           |        Mock        |                 —                 |               —                |              —               |               —               |
| Medical condition                 |           —           |         —          | Profile + document where relevant |       Profile + document       |      Profile + document      |      Profile + document       |
| Medical recommendation            |           —           |         —          |                 —                 | Document / Mock if JKM officer |           Document           |    Professional assessment    |
| Hospital referral                 |           —           |         —          |                 —                 |               —                |              —               |             Mock              |
| Caregiver arrangement             |           —           |      Profile       |                 —                 |               —                | Profile + further assessment |               —               |
| Equipment / treatment suitability |           —           |         —          |                 —                 |   Not independently verified   |              —               |  Not independently verified   |
| Socioeconomic assessment          |           —           |   Not simulated    |           Not simulated           |       Further assessment       | JKM assessment not simulated | PKSP assessment not simulated |
| Document authenticity             |     Not verified      |    Not verified    |           Not verified            |          Not verified          |         Not verified         |         Not verified          |
| Final approval                    |     Not simulated     |   Not simulated    |           Not simulated           |         Not simulated          |        Not simulated         |         Not simulated         |

## Recommended Shared BantuanKu Profile
### Personal Information
- Full name
- MyKad / MyKid number
- Date of birth
- Age
- Gender
- Citizenship
- Marital status
- Occupation
- Employment status

### Contact Information
- Mobile phone number
- Home phone number, where applicable
- Email address, where applicable

### Residence Information
- Residential / correspondence address
- Postcode
- City
- State / Federal Territory
- Country of residence

### Household Information
- Household members
- Household size
- Relationship of household members to beneficiary
- Number of dependants
- Child / dependant information
- Whether beneficiary has children
- Living arrangement

### Financial Information
- Applicant / patient income
- Gross monthly household / family income
- Income source
- Household size for per-capita calculation
- Government / welfare assistance currently received

### Disability / Health Information
- OKU status
- OKU registration status
- Disability / functional limitation
- Chronic illness status
- Bedridden status
- Continuous-treatment requirement
- Continuous-treatment duration

### Caregiver Information
Where applicable:
- Whether a caregiver exists
- Caregiver identity
- Caregiver citizenship
- Relationship to beneficiary / patient
- Whether intensive care is provided
- Number of eligible persons cared for

## Program-Specific Information
These fields should not be required from every user during initial profile creation. They can be requested only when relevant to a recommended program or simulated application.

### STR
- Spouse details
- Eligible-child details
- Full-time student status
- Marriage / divorce / spouse-death dates
- Bank details
- Next-of-kin information

### BWE
- Institution / care-centre status
- Whether care centre provides free services
- Applicable ration-grant status
- Caregiver / dependency details

### BA
- Existing JKM monthly assistance
- Economic circumstances
- Health circumstances affecting need

### BAT
- JKM target-group status
- Required prosthetic / assistive equipment
- Medical / JKM recommendation
- Estimated equipment cost
- Equipment quotation

### BPT
- Whether applicant is the patient
- Patient details
- Caregiver arrangement
- Medical confirmation
- Treatment information

### TBP
- Treating hospital / medical centre
- Hospital referral status
- Medical diagnosis
- Treating Medical Officer / Specialist
- Recommended treatment / medicine / equipment
- Estimated medical cost
- Socioeconomic-assessment information

## Implementation Notes
1. **Beneficiary-centred evaluation:** Eligibility should be evaluated against the intended beneficiary / applicant 
profile even when a family member or caregiver operates BantuanKu on their behalf.
2. **Derived fields:** BantuanKu can calculate age from date of birth, household size from household members, and 
per-capita household income from household income divided by household size.
3. **Conditional questions:** Program-specific questions should be progressively displayed only when relevant rather 
than making the initial profile excessively long.
4. **Preliminary results only:** Use the result wording defined in the locked program documents. BantuanKu must not 
represent a preliminary match as official government eligibility.
5. **Mock verification:** Fictional records may demonstrate selected external-verification processes. Mock results must 
remain clearly separated from real government verification.
6. **Professional / authority assessment:** JKM investigation, PKSP socioeconomic assessment, medical assessment, 
equipment suitability and final program approval remain outside BantuanKu's eligibility engine.

## Source Program Documents
This eligibility matrix is derived from the locked BantuanKu V1.0 program documentation:
- `str.md`
- `bwe.md`
- `ba.md`
- `bat.md`
- `bpt.md`
- `tbp.md`

When program requirements change, the relevant program document should be reviewed first before the eligibility matrix and implementation rules are updated.
