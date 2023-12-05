import './global.css';
import './App.css';
import Router from './router/Router';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './theme';
import { Provider } from './context';
import { Responsive } from './context/ResponsiveContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Responsive>
        <Provider>
          <Router />
        </Provider>
      </Responsive>
    </ThemeProvider>
  );
}

export default App;
