import { UnstyledButton } from "@mantine/core";
import classes from "./Navbar.module.pcss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggle }: { toggle: () => void }) {
  const { t } = useTranslation();
  const nF = useNavigate();
  function navigate(link: string) {
    nF(link);
    toggle();
  }
  return (
    <>
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
    </>
  );
}
