import { Box, Heading } from "@chakra-ui/layout";
import { AnswerContainerProps } from "./AnswerContainerProps.types";
import { AnswerOptionContainer } from "./AnswerOptionContainer";

export function AnswerContainer({
  question,
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
