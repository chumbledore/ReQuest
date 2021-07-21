import TicketDashboard from '../components/TicketDashboard/TicketDashboard';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useAppSelector } from '../store/hooks/hooks';
import Navigation from './Navigation/Navigation';



function App() {
  const darkMode = useAppSelector(state => state.ui.useDarkTheme);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navigation />
        <TicketDashboard />
      </ThemeProvider>  
    </>
  );
}

export default App;
