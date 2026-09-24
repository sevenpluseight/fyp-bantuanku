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
        account: {
          title: "Cipta Akaun",
          subtitle: "Cipta akaun anda untuk bermula.",
          step: "Langkah 1 daripada 4",

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
          step: "Langkah 2 daripada 4",

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
          step: "Langkah 3 daripada 4",

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
    },
  },
};

export default ms;
