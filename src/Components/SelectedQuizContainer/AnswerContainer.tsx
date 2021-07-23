import { Box, Heading } from "@chakra-ui/layout";
import { AnswerContainerProps } from "./AnswerContainerProps.types";
import { AnswerOptionContainer } from "./AnswerOptionContainer";

export function AnswerContainer({
  question,
}: AnswerContainerProps) {
  return (
    <>
      <Box m="1rem">
          <Heading fontSize={{base:"xl",md:"x-large"}} mb="2">{question.question}</Heading>  
          <AnswerOptionContainer question={question} />
      </Box>
    </>
  );
}
