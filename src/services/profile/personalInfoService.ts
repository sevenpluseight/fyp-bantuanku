import { supabase } from "../../lib/supabase";

export type PersonalInformation = {
  fullName: string;
  identificationNumber: string;
  dateOfBirth: string;
  gender: "male" | "female" | null;
  citizenship: "malaysian" | "non_malaysian";
  mobilePhone: string | null;
};

export const getPersonalInformation =
    async (): Promise<PersonalInformation> => {
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
    data,
    error
  } = await supabase
      .from("profiles")
      .select(`
        full_name,
        identification_no,
        date_of_birth,
        gender,
        citizenship,
        mobile_phone
      `)
      .eq("user_id", user.id)
      .single();

  if (error) {
    throw error;
  }

  return {
    fullName: data.full_name,
    identificationNumber: data.identification_no,
    dateOfBirth: data.date_of_birth,
    gender: data.gender as "male" | "female" | null,
    citizenship: data.citizenship as "malaysian" | "non_malaysian",
    mobilePhone: data.mobile_phone
  };
};
