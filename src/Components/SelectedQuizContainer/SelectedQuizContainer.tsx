import { Button } from "@chakra-ui/button";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { useQuiz } from "../../Contexts/quizContext";
import { Question } from "../../Database/quiz.type";
import { AnswerContainer } from "./AnswerContainer";

export function SelectedQuizContainer() {
  const {
    state: { selectedQuiz },
    dispatch,
  } = useQuiz();

  const [reviewAnswers,setReviewAnswers] = useState(false)
  return (
    <>
      {selectedQuiz && (
        <><Box mt="4rem" mb="2rem">
          <Heading m="1rem">Here's your Result !</Heading>
          <Text textAlign="center" m="1rem">
            {selectedQuiz.score >= 7
              ? "🎉 Great Job!"
              : "🙃 You can do better !"}
          </Text>
          <Text textAlign="center" fontSize="1.5rem" fontWeight="extrabold">Your Score: {selectedQuiz?.score}</Text>
          <Button onClick={()=>setReviewAnswers(true)} m="1rem">Review Answers</Button>
          <Box w="70vw" m="auto">
            <SimpleGrid columns={[1, null, 1]} spacing="2rem">
              { reviewAnswers &&  selectedQuiz?.questions.map(
                (question: Question, index: number): JSX.Element => (
                   <AnswerContainer
                    key={question._id}
                    question={question}
                    questionNumber={index}
                  />
                )
              )}
            </SimpleGrid>
          </Box>
        </Box>
        </>
      )}
    </>
  );
}
