import { Box } from "@chakra-ui/layout";
import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { HomePage, NavBar, QuizContainer } from "./Components";

function App() {
  return (
    <Box className="App" p="0 2rem" mt="2rem">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/quiz/:quizId" element={<QuizContainer />}></Route>
      </Routes>
      {/* <HomePage /> */}
    </Box>
  );
}

export default App;
