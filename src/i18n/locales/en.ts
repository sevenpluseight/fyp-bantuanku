const en = {
  translation: {
    common: {
      back: "Back",
      continue: "Continue",
      done: "Done",
      close: "Close",
      cancel: "Cancel",
      ok: "OK",
      remove: "Remove",
      complete: "Complete",
      edit: "Edit",
      save: "Save",
      discard: "Discard",
      keepEditing: "Keep Editing",

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

        errors: {
          invalidCredentials: "The email or password you entered is incorrect.",
          signInFailed: "Unable to sign in. Please try again.",
        }
      },

      register: {
        registering: "Creating your account...",
        registeringDescription: "Please wait while we set up your profile.",

        progress: {
          account: "Account",
          personal: "Personal",
          residence: "Residence",
          household: "Household",
        },

        account: {
          title: "Create Account",
          subtitle: "Create your account to get started.",

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

        residence: {
          title: "Residence",
          subtitle: "Tell us where the person receiving aid currently lives.",

          addressLine1: "Address Line 1",
          addressLine1Placeholder: "House/unit number and street",

          addressLine2: "Address Line 2",
          addressLine2Placeholder: "Building, apartment or neighborhood",

          postcode: "Postcode",
          postcodePlaceholder: "e.g., 50000",

          city: "City",
          cityPlaceholder: "e.g., Kuala Lumpur",

          stateTerritory: "State / Federal Territory",
          selectStateTerritory: "Select state or Federal Territory",
        },

        householdIncome: {
          title: "Household & Income",
          subtitle: "Tell us about the aid recipient's household and income.",

          employmentStatus: "Employment Status",
          selectEmploymentStatus: "Select employment status",

          employmentStatusOptions: {
            employed: "Employed",
            selfEmployed: "Self-employed",
            unemployed: "Unemployed",
            retired: "Retired",
            notWorking: "Not working",
          },

          incomeSource: "Income Source",
          selectIncomeSource: "Select income source",

          incomeSourceOptions: {
            salary: "Salary",
            selfEmployment: "Self-employment",
            pension: "Pension",
            governmentAssistance: "Government assistance",
            familySupport: "Family support",
            savings: "Savings",
            other: "Other",
            noIncome: "No income",
          },

          personalMonthlyIncome: "Personal Monthly Income (RM)",
          householdMonthlyIncome: "Gross Monthly Household Income (RM)",

          householdMembers: "Household Members",
          householdMembersHelper: "Add other people who live in the same household as the aid recipient.",

          householdMember: "Household Member {{number}}",

          memberFullName: "Full Name",
          memberFullNamePlaceholder: "Enter household member's full name",

          relationship: "Relationship",
          selectRelationship: "Select relationship",

          relationshipOptions: {
            spouse: "Spouse",
            child: "Child",
            parent: "Parent",
            sibling: "Sibling",
            grandchild: "Grandchild",
            other: "Other",
          },

          memberDateOfBirth: "Date of Birth",

          addHouseholdMember: "Add Household Member",
          removeHouseholdMember: "Remove household member",

          livingAloneHelper: "If the aid recipient lives alone, you do not need to add a household member.",

          removeMemberDialog: {
            title: "Remove household member?",
            message: "The information entered for this household member will be removed.",
          }
        },

        errors: {
          title: "Unable to complete registration",
          incompleteRegistration: "Some registration information is missing. Please review the previous steps.",
          languageUnavailable: "Unable to determine your preferred language.",
          registrationFailed: "Registration could not be completed. Please try again.",
          identificationNumberExists: "This IC number is already registered."
        },
      },
    },

    profile: {
      title: "Profile",
      description: "Manage your personal and household information.",

      sections: {
        personal: "Personal",
        householdFinancial: "Household & Financial",
        contactResidence: "Contact & Residence",
        preferences: "Preferences",
        account: "Account",
      },

      personalInformation: {
        title: "Personal Information",
        description: "Personal and demographic information",

        personalDetails: "Personal Details",
        contact: "Contact",

        fullName: "Full Name",
        identificationNumber: "IC Number",
        dateOfBirth: "Date of Birth",
        gender: "Gender",
        citizenship: "Citizenship",
        mobileNumber: "Mobile Number",

        male: "Male",
        female: "Female",

        malaysian: "Malaysian",
        nonMalaysian: "Non-Malaysian",

        notProvided: "Not provided",
        updateFailed: "Unable to update your mobile number. Please try again.",

        discardChanges: {
          title: "Discard changes?",
          message: "Your changes will not be saved.",
        },
      },

      household: {
        title: "My Household",
        youOnly: "You only",
        oneMember: "You + 1 household member",
        multipleMembers: "You + {{count}} household members",
      },

      incomeEmployment: {
        title: "Income & Employment",
        noInformation: "Employment information",

        status: {
          employed: "Employed",
          selfEmployed: "Self-employed",
          unemployed: "Unemployed",
          retired: "Retired",
          notWorking: "Not working",
        },
      },

      residentialAddress: {
        title: "Residential Address",
        noAddress: "No address provided",
      },

      language: {
        title: "Language",
      },

      account: {
        signOut: "Sign Out",
      },

      errors: {
        loadTitle: "Unable to load profile",
        loadDescription: "We couldn't load your profile information.",
        tryAgain: "Try Again",
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

      addressLine1Required: "Address line 1 is required.",

      postcodeRequired: "Postcode is required.",
      postcodeInvalid: "Enter a valid 5-digit postcode.",

      cityRequired: "City is required.",
      stateTerritoryRequired: "State/Territory is required.",

      employmentStatusRequired: "Employment status is required.",

      incomeSourceRequired: "Income source is required.",
      personalMonthlyIncomeRequired: "Personal monthly income is required.",
      householdMonthlyIncomeRequired: "Gross monthly household income is required.",
      monthlyIncomeInvalid: "Enter a valid monthly income.",

      householdMemberNameRequired: "Household member's name is required.",
      relationshipRequired: "Relationship is required.",

      householdMemberDobRequired: "Household member's date of birth is required.",
    },
  },
};

export default en;
