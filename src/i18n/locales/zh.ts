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
        progress: {
          account: "账户",
          personal: "个人",
          residence: "住址",
          household: "家庭",
        },

        account: {
          title: "创建账号",
          subtitle: "创建您的账号以开始使用。",
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

        residence: {
          title: "居住地址",
          subtitle: "请填写援助领取者目前的居住地址。",

          addressLine1: "地址第一行",
          addressLine1Placeholder: "门牌／单位号码及街道",

          addressLine2: "地址第二行",
          addressLine2Placeholder: "建筑、公寓或住宅区",

          postcode: "邮政编码",
          postcodePlaceholder: "例如：50000",

          city: "城市",
          cityPlaceholder: "例如：Kuala Lumpur",

          stateTerritory: "州属／联邦直辖区",
          selectStateTerritory: "选择州属或联邦直辖区",
        },

        householdIncome: {
          title: "家庭与收入",
          subtitle: "请填写援助领取者的家庭及收入资料。",

          employmentStatus: "就业状态",
          selectEmploymentStatus: "选择就业状态",

          employmentStatusOptions: {
            employed: "受雇",
            selfEmployed: "自雇",
            unemployed: "失业",
            retired: "退休",
            notWorking: "没有工作",
          },

          incomeSource: "收入来源",
          selectIncomeSource: "选择收入来源",

          incomeSourceOptions: {
            salary: "薪资",
            selfEmployment: "自雇收入",
            pension: "退休金",
            governmentAssistance: "政府援助",
            familySupport: "家庭资助",
            savings: "储蓄",
            other: "其他",
            noIncome: "无收入",
          },

          personalMonthlyIncome: "个人每月收入（RM）",
          householdMonthlyIncome: "家庭每月总收入（RM）",

          householdMembers: "家庭成员",
          householdMembersHelper: "添加与援助领取者居住在同一家庭的其他成员。",

          householdMember: "家庭成员 {{number}}",

          memberFullName: "姓名",
          memberFullNamePlaceholder: "输入家庭成员的姓名",

          relationship: "关系",
          selectRelationship: "选择关系",

          relationshipOptions: {
            spouse: "配偶",
            child: "子女",
            parent: "父母",
            sibling: "兄弟姐妹",
            grandchild: "孙子女",
            other: "其他",
          },

          memberDateOfBirth: "出生日期",

          addHouseholdMember: "添加家庭成员",
          removeHouseholdMember: "移除家庭成员",

          livingAloneHelper: "如果援助领取者独居，则无需添加家庭成员。",

          complete: "完成",
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

      addressLine1Required: "请输入地址第一行。",

      postcodeRequired: "请输入邮政编码。",
      postcodeInvalid: "请输入有效的 5 位数邮政编码。",

      cityRequired: "请输入城市。",
      stateTerritoryRequired: "请选择州属或联邦直辖区。",

      employmentStatusRequired: "请选择就业状态。",

      incomeSourceRequired: "请选择收入来源。",
      personalMonthlyIncomeRequired: "请输入个人每月收入。",
      householdMonthlyIncomeRequired: "请输入家庭每月总收入。",
      monthlyIncomeInvalid: "请输入有效的每月收入。",

      householdMemberNameRequired: "请输入家庭成员姓名。",
      relationshipRequired: "请选择与援助领取者的关系。",

      householdMemberDobRequired: "请输入家庭成员的出生日期。",
    },
  },
};

export default zh;
