import { TicketDashboard } from "../components/TicketDashboard";
import { WelcomePage } from "../layout/HomePage";

const Routes = [
  {
    path: "/",
    sideBarName: "Home",
    routeIcon: "",
    component: WelcomePage,
  },
  {
    path: "/tickets",
    sideBarName: "Dashboard",
    routeIcon: "",
    component: TicketDashboard,
  },
];

export default Routes;
