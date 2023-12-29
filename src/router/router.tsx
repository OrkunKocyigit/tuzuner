import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage.tsx";
import LandingPage from "../pages/landing/LandingPage.tsx";
import IntroTab from "../pages/home/IntroTab/IntroTab.tsx";
import ProfileTab from "../pages/home/ProfileTab/ProfileTab.tsx";
import ExpertiseTab from "../pages/home/ExpertiseTab/ExpertiseTab.tsx";
import ContactTab from "../pages/home/ContactTab/ContactTab.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "intro",
        element: <IntroTab />,
      },
      {
        path: "profile",
        element: <ProfileTab />,
      },
      {
        path: "expertise",
        element: <ExpertiseTab />,
      },
      {
        path: "contact",
        element: <ContactTab />,
      },
    ],
  },
]);
