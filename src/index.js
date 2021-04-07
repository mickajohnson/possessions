import * as React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles";
import theme from "./theme";

import "typeface-staatliches";
import "typeface-domine";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
