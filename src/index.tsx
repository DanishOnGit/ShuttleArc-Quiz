import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { colors, fonts } from "./Database";
import { QuizProvider } from "./Contexts/quizContext";
const theme = extendTheme({ colors, fonts });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QuizProvider>
        <Router>
          <App />
        </Router>
      </QuizProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
