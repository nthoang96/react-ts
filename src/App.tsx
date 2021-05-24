import React from "react";
import "./App.css";
import Header from "./components/Header";

//Material UI
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
  palette: {
    background: {
      paper: "#ffdbdc",
    },
    primary: {
      main: "#3a4664",
    },
    secondary: {
      main: "#eaa0a2",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
