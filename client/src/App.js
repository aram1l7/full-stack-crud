import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accounts from "./pages/accounts";
import Account from "./pages/account";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
function App() {
  useEffect(() => {
    window.history.pushState({}, undefined, "/accounts");
  }, []);
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/accounts/:id" element={<Account />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
