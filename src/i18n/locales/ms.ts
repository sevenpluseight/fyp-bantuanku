const ms = {
  translation: {
    common: {
      back: "Kembali",
      continue: "Teruskan",
      done: "Selesai",
      close: "Tutup",
      cancel: "Batal",

      selectDate: "Pilih tarikh",
      selectOption: "Pilih pilihan",
    },

    language: {
      title: "Bahasa",
      english: "English",
      malay: "Bahasa Melayu",
      chinese: "中文",
    },

    auth: {
      login: {
        title: "Selamat kembali",
        subtitle: "Log masuk untuk meneruskan ke BantuanKu.",
        email: "E-mel",
        emailPlaceholder: "Masukkan e-mel anda",
        password: "Kata Laluan",
        passwordPlaceholder: "Masukkan kata laluan anda",
        signIn: "Log Masuk",
        noAccount: "Belum mempunyai akaun?",
        createAccount: "Cipta akaun",
        unableToSignIn: "Tidak dapat log masuk",
      },

      register: {
        progress: {
          account: "Akaun",
          personal: "Peribadi",
          residence: "Alamat",
          household: "Isi Rumah",
        },

        account: {
          title: "Cipta Akaun",
          subtitle: "Cipta akaun anda untuk bermula.",

          email: "E-mel",
          emailPlaceholder: "Masukkan e-mel anda",

          password: "Kata Laluan",
          passwordPlaceholder: "Gunakan sekurang-kurangnya 8 aksara.",

          confirmPassword: "Sahkan Kata Laluan",
          confirmPasswordPlaceholder: "Masukkan semula kata laluan anda",

          alreadyHaveAccount: "Sudah mempunyai akaun?",
          signIn: "Log masuk",
        },

        personal: {
          title: "Maklumat Peribadi",
          subtitle: "Beritahu kami tentang individu yang akan menerima cadangan bantuan.",

          fullName: "Nama Penuh",
          fullNamePlaceholder: "Masukkan nama penuh",

          icNumber: "Nombor Kad Pengenalan",
          icNumberPlaceholder: "XXXXXX-XX-XXXX",

          dateOfBirth: "Tarikh Lahir",
          dobFromIc: "Diisi secara automatik.",

          citizenship: "Kewarganegaraan",
          selectCitizenship: "Pilih kewarganegaraan",
          malaysian: "Warganegara Malaysia",
          nonMalaysian: "Bukan Warganegara Malaysia",

          mobileNumber: "Nombor Telefon Bimbit",
          mobilePlaceholder: "012-3456789",
        },

        residence: {
          title: "Tempat Tinggal",
          subtitle: "Beritahu kami tempat tinggal semasa penerima bantuan",

          addressLine1: "Alamat Baris 1",
          addressLine1Placeholder: "Nombor rumah/unit and jalan",

          addressLine2: "Alamat Baris 2",
          addressLine2Placeholder: "Bangunan, apartmen atau kawasan perumahan",

          postcode: "Poskod",
          postcodePlaceholder: "cth. 50000",

          city: "Bandar",
          cityPlaceholder: "cth. Kuala Lumpur",

          stateTerritory: "Negeri / Wilayah Persekutuan",
          selectStateTerritory: "Pilih negeri atau Wilayah Persekutuan",
        },

        householdIncome: {
          title: "Isi Rumah & Pendapatan",
          subtitle: "Beritahu kami tentang isi rumah dan pendapatan penerima bantuan.",

          employmentStatus: "Status Pekerjaan",
          selectEmploymentStatus: "Pilih status pekerjaan",

          employmentStatusOptions: {
            employed: "Bekerja",
            selfEmployed: "Bekerja sendiri",
            unemployed: "Menganggur",
            retired: "Bersara",
            notWorking: "Tidak bekerja",
          },

          incomeSource: "Sumber Pendapatan",
          selectIncomeSource: "Pilih sumber pendapatan",

          incomeSourceOptions: {
            salary: "Gaji",
            selfEmployment: "Pendapatan bekerja sendiri",
            pension: "Pencen",
            governmentAssistance: "Bantuan kerajaan",
            familySupport: "Sokongan keluarga",
            savings: "Simpanan",
            other: "Lain-lain",
            noIncome: "Tiada pendapatan",
          },

          personalMonthlyIncome: "Pendapatan Bulanan Peribadi (RM)",
          householdMonthlyIncome: "Pendapatan Kasar Bulanan Isi Rumah (RM)",

          householdMembers: "Ahli Isi Rumah",
          householdMembersHelper: "Tambah individu lain yang tinggal dalam isi rumah yang sama dengan penerima bantuan.",

          householdMember: "Ahli Isi Rumah {{number}}",

          memberFullName: "Nama Penuh",
          memberFullNamePlaceholder: "Masukkan nama penuh ahli isi rumah",

          relationship: "Hubungan",
          selectRelationship: "Pilih hubungan",

          relationshipOptions: {
            spouse: "Pasangan",
            child: "Anak",
            parent: "Ibu atau bapa",
            sibling: "Adik-beradik",
            grandchild: "Cucu",
            other: "Lain-lain",
          },

          memberDateOfBirth: "Tarikh Lahir",

          addHouseholdMember: "Tambah Ahli Isi Rumah",
          removeHouseholdMember: "Buang ahli isi rumah",

          livingAloneHelper: "Jika penerima bantuan tinggal bersendirian, anda tidak perlu menambah ahli isi rumah.",

          complete: "Selesai",
        },
      },
    },

    validation: {
      emailRequired: "E-mel diperlukan.",
      emailInvalid: "Masukkan alamat e-mel yang sah.",

      passwordRequired: "Kata laluan diperlukan.",
      passwordTooShort: "Kata laluan mestilah sekurang-kurangnya 8 aksara.",

      confirmPasswordRequired: "Sila sahkan kata laluan anda.",
      passwordMismatch: "Kata laluan tidak sepadan.",

      fullNameRequired: "Nama penuh diperlukan.",

      myKadNumberRequired: "Nombor kad pengenalan diperlukan.",
      myKadNumberInvalid: "Masukkan nombor kad pengenalan yang sah.",

      dateOfBirthRequired: "Tarikh lahir diperlukan.",

      citizenshipRequired: "Kewarganegaraan diperlukan.",

      mobileNumberRequired: "Nombor telefon bimbit diperlukan.",
      mobileNumberInvalid: "Masukkan nombor telefon bimbit Malaysia yang sah.",

      addressLine1Required: "Alamat baris 1 diperlukan.",

      postcodeRequired: "Poskod diperlukan.",
      postcodeInvalid: "Masukkan poskod 5 digit yang sah.",

      cityRequired: "Bandar diperlukan.",
      stateTerritoryRequired: "Negeri atau Wilayah Persekutuan diperlukan.",

      employmentStatusRequired: "Status pekerjaan diperlukan.",

      incomeSourceRequired: "Sumber pendapatan diperlukan.",
      personalMonthlyIncomeRequired: "Pendapatan bulanan peribadi diperlukan.",
      householdMonthlyIncomeRequired: "Pendapatan kasar bulanan isi rumah diperlukan.",
      monthlyIncomeInvalid: "Masukkan pendapatan bulanan yang sah.",

      householdMemberNameRequired: "Nama ahli isi rumah diperlukan.",
      relationshipRequired: "Hubungan diperlukan.",

      householdMemberDobRequired: "Tarikh lahir ahli isi rumah diperlukan.",
    },
  },
};

export default ms;
