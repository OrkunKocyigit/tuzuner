import { Anchor, Group, Stack, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function ContactTab() {
  const { t } = useTranslation();
  return (
    <Stack gap="xl">
      <Title>{t("tab.contact.title")}</Title>
      <Group>
        <Text fw="bold">{t("tab.contact.instagram")}</Text>
        <Anchor href="https://www.instagram.com/tuzunerlaw" target="_blank">
          @tuzunerlaw
        </Anchor>
      </Group>
      <Group>
        <Text fw="bold">{t("tab.contact.linkedin")}</Text>
        <Anchor
          href="https://www.linkedin.com/in/pelintuzuner/"
          target="_blank"
        >
          @pelintuzuner
        </Anchor>
      </Group>
      <Group>
        <Text fw="bold">{t("tab.contact.email")}</Text>
        <Anchor href="mailto:info@tuzunerlaw.com">info@tuzunerlaw.com</Anchor>
      </Group>
      <Group>
        <Text fw="bold">{t("tab.contact.phone")}</Text>
        <Anchor href="tel:902126081045">+90 212 608 10 45</Anchor>
      </Group>
      <Group>
        <Text fw="bold">{t("tab.contact.fax")}</Text>
        <Anchor href="fax:902126081046">+90 212 608 10 46</Anchor>
      </Group>
      <Stack gap="sm">
        <Text fw="bold">{t("tab.contact.address")}</Text>
        <Text>{t("footer.address.detail")}</Text>
      </Stack>
    </Stack>
  );
}
