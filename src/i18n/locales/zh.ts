const zh = {
  translation: {
    common: {
      back: "返回",
      continue: "继续",
      done: "完成",
      close: "关闭",
      cancel: "取消",

      selectDate: "选择日期",
      selectOption: "请选择",
    },

    language: {
      title: "语言",
      english: "English",
      malay: "Bahasa Melayu",
      chinese: "中文",
    },

    auth: {
      login: {
        title: "欢迎回来",
        subtitle: "登录以继续使用 BantuanKu。",
        email: "电子邮箱",
        emailPlaceholder: "请输入电子邮箱",
        password: "密码",
        passwordPlaceholder: "请输入密码",
        signIn: "登录",
        noAccount: "还没有账号？",
        createAccount: "创建账号",
        unableToSignIn: "无法登录",
      },

      register: {
        account: {
          title: "创建账号",
          subtitle: "创建您的账号以开始使用。",
          step: "第 1 步，共 4 步",
          email: "电子邮箱",
          emailPlaceholder: "请输入电子邮箱",

          password: "密码",
          passwordPlaceholder: "至少使用 8 个字符。",

          confirmPassword: "确认密码",
          confirmPasswordPlaceholder: "请再次输入密码",

          alreadyHaveAccount: "已有账号？",
          signIn: "登录",
        },

        personal: {
          title: "个人资料",
          subtitle: "请填写将接受援助推荐者的个人资料。",
          step: "第 2 步，共 4 步",

          fullName: "姓名",
          fullNamePlaceholder: "请输入姓名",

          icNumber: "身份证号码",
          icNumberPlaceholder: "XXXXXX-XX-XXXX",

          dateOfBirth: "出生日期",
          dobFromIc: "会根据您的身份证号码自动填写。",

          citizenship: "国籍",
          selectCitizenship: "选择国籍",
          malaysian: "马来西亚公民",
          nonMalaysian: "非马来西亚公民",

          mobileNumber: "手机号码",
          mobilePlaceholder: "012-3456789",
        },
      },
    },

    validation: {
      emailRequired: "请输入电子邮箱。",
      emailInvalid: "请输入有效的电子邮箱地址。",

      passwordRequired: "请输入密码。",
      passwordTooShort: "密码必须至少包含 8 个字符。",

      confirmPasswordRequired: "请确认密码。",
      passwordMismatch: "两次输入的密码不一致。",

      fullNameRequired: "请输入姓名。",

      myKadNumberRequired: "请输入身份证号码。",
      myKadNumberInvalid: "请输入有效的身份证号码。",

      dateOfBirthRequired: "请选择出生日期。",

      citizenshipRequired: "请选择国籍。",

      mobileNumberRequired: "请输入手机号码。",
      mobileNumberInvalid: "请输入有效的马来西亚手机号码。",
    },
  },
};

export default zh;
