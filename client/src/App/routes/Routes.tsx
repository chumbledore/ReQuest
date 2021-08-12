import { TicketDashboard } from "../components/TicketDashboard";
import { WelcomePage } from "../layout/HomePage";

const Routes = [
  {
    path: "/",
    sideBarName: "Home",
    component: WelcomePage,
  },
  {
    path: "/tickets",
    sideBarName: "Dashboard",
    component: TicketDashboard,
  },
];

export default Routes;
