import { SimpleGrid, Box } from "@chakra-ui/layout";
import { useRadio, useRadioGroup } from "@chakra-ui/radio";
import { useQuiz } from "../../Contexts/quizContext";
import { Option, Question } from "../../Database/quiz.type";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props.radio);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const OptionStyleProps = {
    cursor: "pointer",
    borderWidth: "1px",
    borderRadius: "md",
    boxShadow: "md",
    _checked: {
      bg: "orange.400",
      color: "white",
      borderColor: "teal.600",
    },
    _focus: {
      boxShadow: "outline",
    },
    px: 5,
    py: 3,
  };

  return (
    <Box as="label">
      <input {...input} checked={props.option.selected} />
      <Box {...checkbox} {...OptionStyleProps}>
        {props.children}
      </Box>
    </Box>
  );
}
export function OptionContainer({ question }: { question: Question }) {
  const { dispatch } = useQuiz();
  const options = question.options;

  function updateAnswer(optionId: string) {
    dispatch({
      type: "SELECTED_OPTION",
      payload: { questionId: question._id, optionId },
    });
    
  }
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: updateAnswer,
  });

  const group = getRootProps();
  return (
    <SimpleGrid columns={[1, null, 2]} spacing="2rem">
      {options.map((option: Option): JSX.Element => {
        const radio = getRadioProps({
          value: option._id,
        });

        return (
          <RadioCard key={option._id} radio={radio} option={option}>
            {option.text}
          </RadioCard>
        );
      })}
    </SimpleGrid>
  );
}
