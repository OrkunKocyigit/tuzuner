import {
  ActionIcon,
  Grid,
  Group,
  rem,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import classes from "../../pages/landing/LandingPage.module.pcss";
import { useTranslation } from "react-i18next";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import { FR, GB, TR } from "country-flag-icons/react/3x2";

export default function Footer() {
  const theme = useMantineTheme();
  const { t, i18n } = useTranslation();

  function openInstagram() {
    window.open("https://www.instagram.com/tuzunerlaw", "_blank");
  }

  function openLinkedin() {
    window.open("https://www.linkedin.com/in/pelintuzuner/", "_blank");
  }

  return (
    <Grid h="100%" px="md" bg={theme.colors.dark[9]}>
      <Grid.Col offset={3} span={7}>
        <Stack>
          <Group align="start">
            <Text fw="bold">{t("footer.address.label")}</Text>
            <Text>{t("footer.address.detail")}</Text>
          </Group>
          <Group>
            <Text fw="bold">{t("footer.phone.label")}</Text>
            <Text>{t("footer.phone.detail")}</Text>
            <Text fw="bold">{t("footer.fax.label")}</Text>
            <Text>{t("footer.fax.detail")}</Text>
            <Text fw="bold">{t("footer.mail.label")}</Text>
            <Text>{t("footer.mail.detail")}</Text>
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col span={1}>
        <Group
          gap={5}
          h="100%"
          className={classes.links}
          justify="flex-start"
          mt={10}
          align="start"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            onClick={() => i18n.changeLanguage("tr")}
          >
            <TR style={{ width: rem(30), height: rem(30) }} stroke="1.5" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            onClick={() => i18n.changeLanguage("en")}
          >
            <GB style={{ width: rem(30), height: rem(30) }} stroke="1.5" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            onClick={() => i18n.changeLanguage("fr")}
          >
            <FR style={{ width: rem(30), height: rem(30) }} stroke="1.5" />
          </ActionIcon>
        </Group>
      </Grid.Col>
      <Grid.Col span={1}>
        <Group
          gap={0}
          h="100%"
          className={classes.links}
          justify="flex-end"
          mt={10}
          align="start"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            onClick={openInstagram}
          >
            <IconBrandInstagram
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            onClick={openLinkedin}
          >
            <IconBrandLinkedin
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Grid.Col>
    </Grid>
  );
}
