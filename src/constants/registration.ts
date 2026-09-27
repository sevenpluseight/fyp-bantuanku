export const CITIZENSHIP_VALUES = [
  "malaysian",
  "non_malaysian",
] as const;

export type CitizenshipValue = typeof CITIZENSHIP_VALUES[number];

export const STATE_TERRITORY_VALUES = [
  "johor",
  "kedah",
  "kelantan",
  "melaka",
  "negeri_sembilan",
  "pahang",
  "penang",
  "perak",
  "perlis",
  "sabah",
  "sarawak",
  "selangor",
  "terengganu",
  "kuala_lumpur",
  "labuan",
  "putrajaya",
] as const;

export type StateTerritoryValue = typeof STATE_TERRITORY_VALUES[number];

export const STATE_TERRITORY_MAP: Record<StateTerritoryValue, string> = {
  johor: "Johor",
  kedah: "Kedah",
  kelantan: "Kelantan",
  melaka: "Melaka",
  negeri_sembilan: "Negeri Sembilan",
  pahang: "Pahang",
  penang: "Pulau Pinang",
  perak: "Perak",
  perlis: "Perlis",
  sabah: "Sabah",
  sarawak: "Sarawak",
  selangor: "Selangor",
  terengganu: "Terengganu",
  kuala_lumpur: "Kuala Lumpur",
  labuan: "Labuan",
  putrajaya: "Putrajaya",
};

export const EMPLOYMENT_STATUS_VALUES = [
  "employed",
  "self_employed",
  "unemployed",
  "retired",
  "not_working",
] as const;

export type EmploymentStatusValue = typeof EMPLOYMENT_STATUS_VALUES[number];

export const INCOME_SOURCE_VALUES = [
  "salary",
  "self_employment",
  "pension",
  "government_assistance",
  "family_support",
  "savings",
  "other",
  "no_income",
] as const;

export type IncomeSourceValue = typeof INCOME_SOURCE_VALUES[number];

export const HOUSEHOLD_RELATIONSHIP_VALUES = [
  "spouse",
  "child",
  "parent",
  "sibling",
  "grandchild",
  "other",
] as const;

export type HouseholdRelationshipValue = typeof HOUSEHOLD_RELATIONSHIP_VALUES[number];
