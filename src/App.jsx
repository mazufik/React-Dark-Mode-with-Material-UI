import AppBar from "./components/AppBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "250vh" }}>
        <AppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <h1 style={{ textAlign: "center" }}>Dark Mode</h1>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
