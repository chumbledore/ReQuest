import { TicketDashboard } from "../components/TicketDashboard";
import { WelcomePage } from "../layout/HomePage";
import HomeIcon from "@material-ui/icons/Home";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";

const Routes = [
  {
    path: "/",
    sideBarName: "Home",
    routeIcon: <HomeIcon />,
    component: WelcomePage,
  },
  {
    path: "/tickets",
    sideBarName: "Dashboard",
    routeIcon: <ConfirmationNumberIcon />,
    component: TicketDashboard,
  },
];

export default Routes;
