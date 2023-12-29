import { Group, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function AccordionLabel({ label }: { label: string }) {
  const { t } = useTranslation();
  return (
    <Group wrap="nowrap">
      <div>
        <Title>{t(label)}</Title>
      </div>
    </Group>
  );
}
