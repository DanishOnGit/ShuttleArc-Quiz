import { Heading } from "@chakra-ui/react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { categories } from "../../Database";
import { Category } from "../../Database/quiz.type";
import { CategoryCard } from "./CategoryCard";
import { Header } from "./Header";
import { QuizList } from "./QuizList";

export function HomePage() {
  return (
    <div>
     <Header />
     <QuizList/>
    </div>
  );
}
