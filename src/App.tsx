import './global.css';
import './App.css';
import Router from './router/Router';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './theme';
import { Provider } from './context';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
