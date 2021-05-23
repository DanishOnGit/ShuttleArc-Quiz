import { Box, Heading,Text } from "@chakra-ui/layout";
import { AnswerContainerProps } from "./AnswerContainerProps.types";
import { AnswerOptionContainer } from "./AnswerOptionContainer";

export function AnswerContainer({
  question,
  questionNumber,
}: AnswerContainerProps) {
  return (
    <>
      <Box>
          <Heading>{question.question}</Heading>
          
          <AnswerOptionContainer question={question} />
      </Box>
    </>
  );
}
