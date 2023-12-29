import { Accordion, Stack, Text } from "@mantine/core";
import AccordionLabel from "../AccordionLabel/AccordionLabel.tsx";
import { useTranslation } from "react-i18next";

export default function AccordionItem({
  id,
  label,
  desc,
}: {
  id: string;
  label: string;
  desc: string[];
}) {
  const { t } = useTranslation();
  return (
    <Accordion.Item value={id} key={label}>
      <Accordion.Control>
        <AccordionLabel label={label}></AccordionLabel>
      </Accordion.Control>
      <Accordion.Panel>
        <Stack gap="xl">
          {desc.map((value) => (
            <Text>{t(value)}</Text>
          ))}
        </Stack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
