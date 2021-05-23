import { Button } from "@chakra-ui/button";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useQuiz } from "../../Contexts/quizContext";
import { OptionContainer } from "./OptionContainer";
import { QuestionContainerProps } from "./QuestionContainerProps.type";

export function QuestionContainer({
  question,
  setShowResult,
}: QuestionContainerProps) {
  const {
    state: { currentQuestionNumber, selectedQuiz },
    dispatch,
  } = useQuiz();

  function updateQuestionOrSubmitQuiz(){
    
      if(currentQuestionNumber!==selectedQuiz?.totalQuestions){
          dispatch({type:"INCREMENT_QUESTION_NUMBER"})
      }else{
          dispatch({type:"CALCULATE_SCORE"});
          setShowResult(true)
      }
  }
  
  return (
    <>
      <Box m="4rem auto" w={"70vw"} >
        <Heading mb="2rem">{question.question}</Heading>
        <OptionContainer question={question} />
        <Button onClick={updateQuestionOrSubmitQuiz} m="1rem 0" bgColor="gray.300">
          {currentQuestionNumber !== selectedQuiz?.totalQuestions
            ? "Next"
            : "Submit"}
        </Button>
      </Box>
    </>
  );
}
