import { supabase } from "../../lib/supabase";

export type HouseholdMemberSummary = {
  id: string;
  fullName: string;
  relationship: string;
  dateOfBirth: string | null;
};

export type HouseholdMember = {
  id: string;
  fullName: string;
  identificationNumber: string | null;
  relationship: string;
  dateOfBirth: string | null;
  gender: string | null;
  citizenship: string | null;
  isDependent: boolean | null;
  employmentStatus: string | null;
  occupation: string | null;
  monthlyIncome: number | null;
  isStudent: boolean | null;
  studyMode: string | null;
  institutionType: string | null;
  isOku: boolean | null;
  okuRegistered: boolean | null;
};

const getCurrentProfileId =
    async (): Promise<string> => {
      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      if (!user) {
        throw new Error("No authenticated user.");
      }

      const {
        data: profile,
        error: profileError
      } = await supabase
          .from("profiles")
          .select("id")
          .eq("user_id", user.id)
          .single();

      if (profileError) {
        throw profileError;
      }

      return profile.id;
    };

export const getHouseholdMembers =
    async (): Promise<HouseholdMemberSummary[]> => {
      const profileId = await getCurrentProfileId();

      const {
        data,
        error
      } = await supabase
          .from("household_members")
          .select(`
        id,
        full_name,
        relationship,
        date_of_birth
      `)
          .eq("profile_id", profileId)
          .order("created_at", {
            ascending: true
          });

      if (error) {
        throw error;
      }

      return data.map((member) => ({
        id: member.id,
        fullName: member.full_name,
        relationship: member.relationship,
        dateOfBirth: member.date_of_birth
      }));
    };

export const getHouseholdMember =
    async (
        memberId: string
    ): Promise<HouseholdMember> => {
      const profileId = await getCurrentProfileId();

      const {
        data,
        error
      } = await supabase
          .from("household_members")
          .select(`
        id,
        full_name,
        identification_no,
        relationship,
        date_of_birth,
        gender,
        citizenship,
        is_dependent,
        employment_status,
        occupation,
        monthly_income,
        is_student,
        study_mode,
        institution_type,
        is_oku,
        oku_registered
      `)
          .eq("id", memberId)
          .eq("profile_id", profileId)
          .single();

      if (error) {
        throw error;
      }

      return {
        id: data.id,
        fullName: data.full_name,
        identificationNumber: data.identification_no,
        relationship: data.relationship,
        dateOfBirth: data.date_of_birth,
        gender: data.gender,
        citizenship: data.citizenship,
        isDependent: data.is_dependent,
        employmentStatus: data.employment_status,
        occupation: data.occupation,
        monthlyIncome:
            data.monthly_income === null
                ? null
                : Number(data.monthly_income),
        isStudent: data.is_student,
        studyMode: data.study_mode,
        institutionType: data.institution_type,
        isOku: data.is_oku,
        okuRegistered: data.oku_registered
      };
    };

export type CreateHouseholdMemberInput = {
  fullName: string;
  relationship: string;
  dateOfBirth: Date;
};

export const createHouseholdMember =
    async (
        input: CreateHouseholdMemberInput
    ): Promise<string> => {
  const profileId = await getCurrentProfileId();

  const year = input.dateOfBirth.getFullYear();
  const month = String(input.dateOfBirth.getMonth() + 1).padStart(2, "0");
  const day = String(input.dateOfBirth.getDate()).padStart(2, "0");

  const {
    data,
    error
  } = await supabase
      .from("household_members")
      .insert({
        profile_id: profileId,
        full_name: input.fullName.trim(),
        relationship: input.relationship,
        date_of_birth: `${year}-${month}-${day}`
      })
      .select("id")
      .single();

  if (error) {
    throw error;
  }

  return data.id;
};
