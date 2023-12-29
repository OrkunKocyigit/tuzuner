import { AppShell, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Header toggle={toggle} opened={opened}></Header>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar toggle={toggle}></Navbar>
      </AppShell.Navbar>
      <AppShell.Footer>
        <Footer></Footer>
      </AppShell.Footer>
      <AppShell.Main>
        <Container>
          <Outlet></Outlet>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
