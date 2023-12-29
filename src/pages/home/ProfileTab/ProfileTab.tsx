import { Accordion } from "@mantine/core";
import AccordionItem from "../../../components/AccordionItem/AccordionItem.tsx";

const data: Array<{
  id: string;
  label: string;
  data: string[];
}> = [
  { id: "1", label: "tab.profile.label.1", data: [] },
  { id: "2", label: "tab.profile.label.2", data: [] },
  { id: "3", label: "tab.profile.label.3", data: [] },
];

export default function ProfileTab() {
  return (
    <Accordion>
      {data.map((value) => (
        <AccordionItem
          key={`profile_item_${value.id}`}
          id={value.id}
          label={value.label}
          desc={value.data}
        ></AccordionItem>
      ))}
    </Accordion>
  );
}
