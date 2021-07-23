import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { HomePage, NavBar, QuizContainer } from "./Components";
import { HomePageModal } from "./Components/HomePage/HomePageModal";

function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <Box className="App" m={{base:"1rem",md:"2rem"}}>
      {showModal && <HomePageModal setShowModal={setShowModal} />}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/quiz/:quizId" element={<QuizContainer />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
