import { useCallback, useEffect, useMemo, useState } from "react";
import { getProfileOverview, ProfileOverview } from "../../services/profile/profileService";
import { supabase } from "../../lib/supabase";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { BriefcaseBusiness, ChevronRight, Globe2, House, UserRound, UsersRound } from "lucide-react-native";
import { useTranslation } from "react-i18next";

import Screen from "../../components/layout/Screen";
import ScreenHeader from "../../components/layout/ScreenHeader";
import Button from "../../components/ui/Button";
import Section from "../../components/layout/Section";
import Card from "../../components/ui/Card";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ProfileStackParamList} from "../../navigation/types";

type ProfileRowProps = {
  icon: typeof UserRound;
  title: string;
  description: string;
  onPress?: () => void;
  showDivider?: boolean;
};

type ProfileScreenProps = NativeStackScreenProps<ProfileStackParamList, "ProfileOverview">;

function ProfileRow({
    icon: Icon,
    title,
    description,
    onPress,
    showDivider = false
}: ProfileRowProps) {
  return (
      <>
        <Pressable
          onPress={onPress}
          disabled={!onPress}
          accessibilityRole={onPress ? "button" : undefined}
          className="flex-row items-center px-4 py-4"
        >
          <View className="h-11 w-11 items-center justify-center rounded-full bg-primary/20">
            <Icon size={21} color="#0352CE" />
          </View>

          <View className="ml-3 flex-1">
            <Text className="text-base font-medium text-foreground">
              {title}
            </Text>

            <Text className="mt-0.5 text-sm leading-5 text-muted-foreground">
              {description}
            </Text>
          </View>

          {onPress && (
              <ChevronRight size={20} color="#9CA3AF" />
          )}
        </Pressable>

        {showDivider && (
            <View className="ml-[68px] h-px bg-border" />
        )}
      </>
  );
}

const maskIdentificationNumber = (
    identificationNumber: string
) => {
  const normalized = identificationNumber.replace(/\D/g, "");

  if (normalized.length !== 12) {
    return "••••••-••-••••";
  }

  return `••••••-••-${normalized.slice(-4)}`;
};

const getInitials = (
    fullName: string
)=> {
  const names = fullName.trim().split(/\s+/).filter(Boolean);

  if (names.length === 0) {
    return "?";
  }

  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }

  return (
      names[0].charAt(0) +
      names[names.length - 1].charAt(0)
  ).toUpperCase();
};

export default function ProfileScreen({
    navigation
}: ProfileScreenProps) {
  const { t } = useTranslation();

  const [profile, setProfile] = useState<ProfileOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadProfile = useCallback(async () => {
    try {
      setError(false);

      const data = await getProfileOverview();

      setProfile(data);
    } catch (loadError) {
      if (__DEV__) {
        console.error(
            "[PROFILE] Failed to load profile:", loadError
        );
      }

      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadProfile();
  }, [loadProfile]);

  const initials = useMemo(
      () =>
          profile
              ? getInitials(profile.fullName)
              : "",
      [profile]
  );

  const getHouseholdDescription = () => {
    if (!profile) {
      return "";
    }

    if (profile.householdMemberCount === 0) {
      return t("profile.household.youOnly");
    }

    if (profile.householdMemberCount === 1) {
      return t("profile.household.oneMember");
    }

    return t(
        "profile.household.multipleMembers",
        {
          count: profile.householdMemberCount
        }
    );
  };

  const getEmploymentStatus = () => {
    if (!profile?.employmentStatus) {
      return t("profile.incomeEmployment.noInformation");
    }

    const statusKeys: Record<string, string> = {
      employed: "employed",
      self_employed: "selfEmployed",
      unemployed: "unemployed",
      retired: "retired",
      not_working: "notWorking",
    };

    const statusKey = statusKeys[profile.employmentStatus];

    if (!statusKey) {
      return t("profile.incomeEmployment.noInformation");
    }

    return t(`profile.incomeEmployment.status.${statusKey}`);
  }

  const getLanguageLabel = () => {
    switch (profile?.preferredLanguage) {
      case "ms":
        return t("language.malay");

      case "zh":
        return t("language.chinese");

      case "en":
      default:
        return t("language.english");
    }
  };

  const handleSignOut = async () => {
    const { error: signOutError } = await supabase.auth.signOut();

    if (signOutError) {
      if (__DEV__) {
        console.error(
            "[AUTH] Sign out failed:", signOutError
        );
      }
    }
  };

  if (loading) {
    return (
        <Screen>
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0352CE" />
          </View>
        </Screen>
    );
  }

  if (error || !profile) {
    return (
        <Screen>
          <ScreenHeader
              title={t("profile.title")}
              description={t("profile.description")}
          />

          <View className="mt-8">
            <Text className="text-base font-medium text-foreground">
              {t("profile.errors.loadTitle")}
            </Text>

            <Text className="mt-2 text-sm text-muted-foreground">
              {t("profile.errors.loadDescription")}
            </Text>

            <Button
              variant="outline"
              onPress={() => {
                setLoading(true);
                void loadProfile();
              }}
              className="mt-4"
            >
              {t("profile.errors.tryAgain")}
            </Button>
          </View>
        </Screen>
    );
  }

  return (
      <Screen>
        <ScreenHeader
            title={t("profile.title")}
            description={t("profile.description")}
        />

        <View className="mt-6 items-center">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-primary/20">
            <Text className="text-2xl font-semibold text-primary">
              {initials}
            </Text>
          </View>

          <Text className="mt-3 text-xl font-semibold text-foreground">
            {profile.fullName}
          </Text>

          <Text className="mt-1 text-sm text-muted-foreground">
            {maskIdentificationNumber(profile.identificationNumber)}
          </Text>
        </View>

        {/* Personal */}
        <Section
            title={t("profile.sections.personal")}
            className="mt-8"
        >
          <Card padding="none">
            <ProfileRow
                icon={UserRound}
                title={t("profile.personalInformation.title")}
                description={t("profile.personalInformation.description")}
                onPress={() => navigation.navigate("PersonalInformation")}
            />
          </Card>
        </Section>

        {/* Household and Financial */}
        <Section
            title={t("profile.sections.householdFinancial")}
            className="mt-8"
        >
          <Card padding="none">
            <ProfileRow
              icon={UsersRound}
              title={t("profile.household.title")}
              description={getHouseholdDescription()}
              showDivider
            />

            <ProfileRow
              icon={BriefcaseBusiness}
              title={t("profile.incomeEmployment.title")}
              description={getEmploymentStatus()}
            />
          </Card>
        </Section>

        {/* Contact and Residence */}
        <Section
            title={t("profile.sections.contactResidence")}
            className="mt-8"
        >
          <Card padding="none">
            <ProfileRow
              icon={House}
              title={t("profile.residentialAddress.title")}
              description={
                profile.address
                    ? `${profile.address.city}, ${profile.address.stateTerritory}`
                    : t("profile.residentialAddress.noAddress")
              }
            />
          </Card>
        </Section>

        {/* Preferences */}
        <Section
            title={t("profile.sections.preferences")}
            className="mt-8"
        >
          <Card padding="none">
            <ProfileRow
              icon={Globe2}
              title={t("profile.language.title")}
              description={getLanguageLabel()}
            />
          </Card>
        </Section>

        {/* Account */}
        <Section
            title={t("profile.sections.account")}
            className="mt-8"
        >
          <Button
              variant="outline"
              onPress={handleSignOut}
          >
            {t("profile.account.signOut")}
          </Button>
        </Section>
      </Screen>
  );
}
