import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useQuiz } from "../../Contexts/quizContext";
import { quizzes } from "../../Database";
import { Quiz } from "../../Database/quiz.type";
import { SelectedQuizContainer } from "../SelectedQuizContainer";
import { Instructions } from "./Instructions";
import { QuestionContainer } from "./QuestionContainer";

export function QuizContainer() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const { quizId } = useParams();
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const {
    state: { currentQuestionNumber },
    dispatch,
  } = useQuiz();

  useEffect(() => {
    const quizDetails = quizzes.find((quiz) => quiz._id === quizId);
    if (quizDetails) {
      dispatch({ type: "SELECTED_QUIZ", payload: { quiz: quizDetails } });
      setQuiz(quizDetails);
    }
    return ()=>dispatch({type:"RESET"})
  }, [quizId, dispatch]);
  return (
    <>
      {!showResult && quiz && (
        <>
          {!showQuiz ? (
            <Instructions setShowQuiz={setShowQuiz} />
          ) : (
            <QuestionContainer
              key={quiz?.questions[currentQuestionNumber - 1]._id}
              question={quiz?.questions[currentQuestionNumber - 1]}
              setShowResult={setShowResult}
            />
          )}
        </>
      )}
      {showResult && <SelectedQuizContainer/>}
    </>
  );
}
