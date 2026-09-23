const en = {
  translation: {
    common: {
      back: "Back",
      continue: "Continue",
      done: "Done",
      close: "Close",
      cancel: "Cancel",

      selectDate: "Select a date",
      selectOption: "Select an option",
    },

    language: {
      title: "Language",
      english: "English",
      malay: "Bahasa Melayu",
      chinese: "中文",
    },

    auth: {
      login: {
        title: "Welcome back",
        subtitle: "Sign in to continue to BantuanKu.",
        email: "Email",
        emailPlaceholder: "Enter your email",
        password: "Password",
        passwordPlaceholder: "Enter your password",
        signIn: "Sign In",
        noAccount: "Don't have an account?",
        createAccount: "Create account",
        unableToSignIn: "Unable to sign in",
      },

      register: {
        account: {
          title: "Create Account",
          subtitle: "Create your account to get started.",
          step: "Step 1 of 4",

          email: "Email",
          emailPlaceholder: "Enter your email",

          password: "Password",
          passwordPlaceholder: "Use at least 8 characters.",

          confirmPassword: "Confirm Password",
          confirmPasswordPlaceholder: "Enter your password again",

          alreadyHaveAccount: "Already have an account?",
          signIn: "Sign in",
        },

        personal: {
          title: "Personal Details",
          subtitle: "Tell us about the person who will receive aid recommendations.",
          step: "Step 2 of 4",

          fullName: "Full Name",
          fullNamePlaceholder: "Enter full name",

          icNumber: "IC Number",
          icNumberPlaceholder: "XXXXXX-XX-XXXX",

          dateOfBirth: "Date of Birth",
          dobFromIc: "Automatically filled from your IC number.",

          citizenship: "Citizenship",
          selectCitizenship: "Select citizenship",
          malaysian: "Malaysian",
          nonMalaysian: "Non-Malaysian",

          mobileNumber: "Mobile Number",
          mobilePlaceholder: "012-3456789",
        },
      },
    },

    validation: {
      emailRequired: "Email is required.",
      emailInvalid: "Enter a valid email address.",

      passwordRequired: "Password is required.",
      passwordTooShort: "Password must contain at least 8 characters.",

      confirmPasswordRequired: "Please confirm your password.",
      passwordMismatch: "Passwords do not match.",

      fullNameRequired: "Full name is required.",

      myKadNumberRequired: "IC number is required.",
      myKadNumberInvalid: "Enter a valid IC number.",

      dateOfBirthRequired: "Date of birth is required.",

      citizenshipRequired: "Citizenship is required.",

      mobileNumberRequired: "Mobile number is required.",
      mobileNumberInvalid: "Enter a valid Malaysian mobile number.",
    },
  },
};

export default en;
