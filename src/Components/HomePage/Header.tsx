import { Heading, Text } from "@chakra-ui/layout";

import { useQuiz } from "../../Contexts/quizContext";
import { colors } from "../../Database";

export function Header() {
  const {
    state: { name },
  } = useQuiz();

  return (
    <>
      <Heading mt="2rem" as="h1" size="4xl" p="2rem 0">
        {name && <Text mb="1rem" color={colors.orange[700]}>Hi {name}!</Text>}
        Welcome to ShuttleArc Quiz!
      </Heading>
    </>
  );
}
