import { TicketDashboard } from "../components/TicketDashboard";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useAppSelector } from "../store/hooks";
import { Navigation } from "./Navigation";
import { Route } from "react-router-dom";
import { WelcomePage } from "./HomePage/WelcomePage";
import { LoginForm } from "../components/Users/LoginForm";
import { RegisterForm } from "../components/Users/RegisterForm";

function App() {
  const darkMode = useAppSelector((state) => state.ui.useDarkTheme);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/tickets" component={TicketDashboard} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </ThemeProvider>
    </>
  );
}

export default App;
