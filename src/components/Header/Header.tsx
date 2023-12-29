import { Burger, Group, UnstyledButton, useMantineTheme } from "@mantine/core";
import BrandIcon from "../BrandIcon/BrandIcon.tsx";
import classes from "./Header.module.pcss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Header({
  toggle,
  opened,
}: {
  toggle: () => void;
  opened: boolean;
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useMantineTheme();
  return (
    <Group h="100%" px="md" bg={theme.colors.dark[9]}>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
      ></Burger>
      <Group justify="space-between" style={{ flex: 1 }}>
        <BrandIcon></BrandIcon>
        <Group ml="xl" gap={0} visibleFrom="sm">
          <UnstyledButton
            className={classes.control}
            onClick={() => navigate("/home/intro")}
          >
            {t("header.label.intro")}
          </UnstyledButton>
          <UnstyledButton
            className={classes.control}
            onClick={() => navigate("/home/expertise")}
          >
            {t("header.label.expertise")}
          </UnstyledButton>
          <UnstyledButton
            className={classes.control}
            onClick={() => navigate("/home/profile")}
          >
            {t("header.label.profile")}
          </UnstyledButton>
          <UnstyledButton
            className={classes.control}
            onClick={() => navigate("/home/contact")}
          >
            {t("header.label.contact")}
          </UnstyledButton>
        </Group>
      </Group>
    </Group>
  );
}
