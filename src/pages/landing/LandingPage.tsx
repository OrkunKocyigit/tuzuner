import { Container, Text, Group, Image, Stack, Title } from "@mantine/core";
import Logo from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./LandingPage.module.pcss";

export default function LandingPage() {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <Stack gap="10vh" mt="20vh">
        <Stack align="center">
          <Image src={Logo} w={300} fit="contain"></Image>
          <Title>{t("brand.name")}</Title>
          <Group>
            <Link
              to={"/home/intro"}
              onClick={() => i18n.changeLanguage("tr")}
              className={classes.link}
            >
              {t("language.label.tr")}
            </Link>
            <Link
              to={"/home/intro"}
              onClick={() => i18n.changeLanguage("en")}
              className={classes.link}
            >
              {t("language.label.en")}
            </Link>
            <Link
              to={"/home/intro"}
              onClick={() => i18n.changeLanguage("fr")}
              className={classes.link}
            >
              {t("language.label.fr")}
            </Link>
          </Group>
        </Stack>
        <Stack align={"center"}>
          <Group className={classes.address} align="start">
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
      </Stack>
    </Container>
  );
}
