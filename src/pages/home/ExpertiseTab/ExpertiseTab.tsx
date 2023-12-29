import { Title, Text, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function ExpertiseTab() {
  const { t } = useTranslation();
  return (
    <article>
      <Title mb={50}>{t("brand.name")}</Title>
      <Stack gap="xl">
        <Text>{t("tab.expertise.info.1")}</Text>
        <Text>{t("tab.expertise.info.2")}</Text>
        <Text>{t("tab.expertise.info.3")}</Text>
        <Text>{t("tab.expertise.info.4")}</Text>
        <Text>{t("tab.expertise.info.5")}</Text>
      </Stack>
    </article>
  );
}
