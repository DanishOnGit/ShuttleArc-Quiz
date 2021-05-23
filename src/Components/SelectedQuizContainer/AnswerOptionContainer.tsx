import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { Option, Question } from "../../Database/quiz.type";

function OptionCard({ option }: { option: Option }) {
  const bgColor = option.isRight
    ? "green.300"
    : option.selected
    ? "red.400"
    : "gray.400";

  const optionCardStyles = {
    boxShadow: "md",
    borderWidth: "1px",
    borderRadius: "md",
    bg: bgColor,
    color: "gray.800",
    fontWeight: "bold",
    p: "1rem",
  };

  return (
    <Box {...optionCardStyles}>
      {option.selected && option.isRight && <CheckIcon mr="2" />}
      {option.selected && !option.isRight && <CloseIcon mr="2" />}
      {option.text}
    </Box>
  );
}
export function AnswerOptionContainer({ question }: { question: Question }) {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing="1rem">
      {question.options.map((option: Option) => (
        <OptionCard option={option} key={option._id} />
      ))}
    </SimpleGrid>
  );
}
