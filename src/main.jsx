import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { grey, red } from "@mui/material/colors";
import { Slide, ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { persistor, store } from "./store/index.js";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#018383",
      dark: "#016A70",
      light: "#38A3A5",
    },
    secondary: {
      main: "#ADCD4B",
      dark: "#6f8c18",
      light: "#d7f285",
    },
    neutral: {
      main: "#F3F9FA",
    },
    sidebar: {
      main: "#222e3c",
      text: "#e9ecef",
      hover: "#bdd7f154",
    },
    white: {
      main: "#fff",
    },
    red: {
      main: red[500],
      light: red[200],
      dark: red[800],
    },

    table: {
      odd: grey[200],
    },
  },
  typography: {
    fontFamily: ["'Roboto', sans-serif"],
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer transition={Slide} autoClose="1000" />
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
