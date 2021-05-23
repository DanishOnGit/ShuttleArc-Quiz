import { Question } from "../../Database/quiz.type";

export type QuestionContainerProps = {
    question:Question,
    setShowResult:(value:boolean)=>void
}