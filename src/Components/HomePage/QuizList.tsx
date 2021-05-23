import { Heading } from "@chakra-ui/layout";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { quizzes } from "../../Database";
import { Quiz } from "../../Database/quiz.type";
import { QuizCard } from "./QuizCard";

export function QuizList() {
  return (
    <>
      <Box w="70vw" m="auto">
        <Heading as="h2" p="1rem 0">
          Pick Your Quiz Category !
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing="2rem">
          {quizzes.map(
            (item: Quiz): JSX.Element => (
              <QuizCard item={item} />
            )
          )}
        </SimpleGrid>
      </Box>
    </>
  );
}
