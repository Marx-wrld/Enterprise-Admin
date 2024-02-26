import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Resets the css to default */}
        <div className="app">
          <main className="content">
            <Topbar />
            {/* <Sidebar />
            <Dashboard />  */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
