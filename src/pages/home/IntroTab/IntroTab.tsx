import { Image, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function IntroTab() {
  const { t } = useTranslation();
  return (
    <>
      <Image src="/adalet.png" height={420}></Image>
      <Text>{t("tab.intro.summary")}</Text>
    </>
  );
}
