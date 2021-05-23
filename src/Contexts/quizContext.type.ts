import { Quiz } from "../Database/quiz.type";

export type ContextType = {
  state: InitialStateType;
  dispatch: (action: ACTIONTYPE) => void;
  
};

export type InitialStateType = {
  selectedQuiz: Quiz | null;
  currentQuestionNumber: number;
  name: string
};

export type ACTIONTYPE =
  | { type: "SET_NAME"; payload: string }
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
