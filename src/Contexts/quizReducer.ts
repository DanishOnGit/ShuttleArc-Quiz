import { isSelectedOptionRight } from "../Utils";
import { ACTIONTYPE, InitialStateType } from "./quizContext.type";

export const initialState: InitialStateType = {
  selectedQuiz: null,
  currentQuestionNumber: 1,
};

export function quizReducer(state: InitialStateType, action: ACTIONTYPE) {
  switch (action.type) {
    case "SELECTED_QUIZ": {
      return { ...state, selectedQuiz: action.payload.quiz };
    }

    case "INCREMENT_QUESTION_NUMBER": {
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };
    }

    case "CALCULATE_SCORE": {
      if (state.selectedQuiz) {
        const quesArray = state.selectedQuiz.questions;
        const score = quesArray.reduce(
          (totalScore: number, { points, negativePoints, options }): number => {
            if (isSelectedOptionRight(options)) {
              return totalScore + points;
            }
            return negativePoints ? totalScore - negativePoints : totalScore;
          },
          0
        );
        

        return {
          ...state,
          selectedQuiz: {
            ...state.selectedQuiz,
            score,
          },
        };
      } else {
        throw new Error("No Quiz Selected !");
      }
    }

    case "SELECTED_OPTION": {
      if (state.selectedQuiz) {
        const result = state.selectedQuiz.questions.map((question) => {
          if (question._id !== action.payload.questionId) {
            return question;
          }
          return {
            ...question,
            options: question.options.map((option) => {
              return option._id !== action.payload.optionId
                ? { ...option, selected: false }
                : { ...option, selected: true };
            }),
          };
        });
        return {
          ...state,
          selectedQuiz: { ...state.selectedQuiz, questions: result },
        };
      } else {
        throw new Error("No Quiz Selected !");
      }
    }

    case "RESET": {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}
