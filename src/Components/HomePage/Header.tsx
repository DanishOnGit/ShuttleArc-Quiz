import { Heading, Text } from "@chakra-ui/layout";
import {  useBreakpointValue } from "@chakra-ui/react";

import { useQuiz } from "../../Contexts/quizContext";
import { colors } from "../../Database";

export function Header() {
  const {
    state: { name },
  } = useQuiz();
const fontValues = useBreakpointValue({base:"2xl",md:"4xl"})
  return (
    <>
      <Heading mt="2rem" as="h1" size={fontValues} p="2rem 0">
        {name && <Text mb="1rem" color={colors.orange[700]}>Hi {name}!</Text>}
        Welcome to ShuttleArc Quiz!
      </Heading>
    </>
  );
}
