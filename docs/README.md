# BantuanKu Government Aid Programs

The program documentation in this directory serves as the reference for the system's government aid discovery, 
rule-based eligibility matching, personalized recommendations and guided application assistance features.

---

## Documentation Notice
Program information such as eligibility criteria, benefits, required documents and application information is documented
based on publicly available official government sources wherever available.

Some information in these documents derived or structured specifically for BantuanKu and may not appear directly in
official government sources. This includes BantuanKu profile requirements, machine-evaluable eligibility rules, internal
rule identifiers, mock verification requirements and simulated application workflow.

These system-specific elements represent BantuanKu's interpretation and implementation of the published program requirements.
They are intended for preliminary eligibility matching, application assistance, development and testing only and do not
represent official government eligibility decisions, verification or approval.

Each program document includes its relevant sources and a last-reviewed date for reference.

---

## V1.0 Program Database
The initial version of BantuanKu focuses on six government assistance programs
relevant to the financial, welfare, healthcare, care and assistive-support
needs of B40 elderly communities.

| Code | Programme                                                  | Category                   | Agency    | Description                                                                                                                                             | Documentation                 |
|------|------------------------------------------------------------|----------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| STR  | Sumbangan Tunai Rahmah                                     | Financial Assistance       | LHDNM     | Financial assistance for eligible households, elderly individuals without a spouse and single individuals based on the applicable eligibility criteria. | [View](./aid-programs/str.md) |
| BWE  | Bantuan Warga Emas                                         | Elderly Assistance         | JKM       | Monthly financial assistance for eligible elderly individuals to support their well-being and continued living within the community.                    | [View](./aid-programs/bwe.md) |
| BA   | Bantuan Am Persekutuan                                     | General Welfare Assistance | JKM       | Financial assistance for eligible individuals and families requiring support with basic living needs.                                                   | [View](./aid-programs/ba.md)  |
| BPT  | Bantuan Penjagaan OKU Terlantar / Pesakit Kronik Terlantar | Care Assistance            | JKM       | Financial assistance for eligible caregivers of bedridden persons with disabilities or patients with chronic illnesses requiring care.                  | [View](./aid-programs/bpt.md) |
| BAT  | Bantuan Alat Sokongan / Alat Tiruan                        | Assistive Support          | JKM       | Assistance for eligible individuals who require assistive or prosthetic equipment.                                                                      | [View](./aid-programs/bat.md) |
| TBP  | Tabung Bantuan Perubatan                                   | Medical Assistance         | KKM / MOH | Financial assistance for eligible patients requiring treatment, medicines, medical equipment or rehabilitation equipment.                               | [View](./aid-programs/tbp.md) |

The shared profile information and eligibility requirements across the programs are documented in the
[Eligibility Matrix](./aid-programs/eligibility-matrix.md).
