import { Quiz } from "../Database/quiz.type";

export type ContextType = {
  state: InitialStateType;
  dispatch: (action: ACTIONTYPE) => void;
};

export type InitialStateType = {
  selectedQuiz: Quiz | null;
  currentQuestionNumber: number;
};

export type ACTIONTYPE =
  | {
      type: "SELECTED_QUIZ";
      payload: {
        quiz: Quiz;
      };
    }
  | { type: "INCREMENT_QUESTION_NUMBER" }
  | { type: "CALCULATE_SCORE" }
  | { type: "RESET" }
  | {
      type: "SELECTED_OPTION";
      payload: { questionId: string; optionId: string };
    };
