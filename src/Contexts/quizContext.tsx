import React, {  createContext, useContext, useReducer } from "react";
import { ContextType } from "./quizContext.type";
import {quizReducer,initialState} from "./quizReducer"
const QuizContext = createContext<ContextType>({}as ContextType);



    export const QuizProvider: React.FC = ({ children }) => {
        const [state, dispatch] = useReducer (quizReducer, initialState) ;
    
        return (
            <QuizContext.Provider value={{ state, dispatch }}>
                {children}
            </QuizContext.Provider>
        );
    };

    export const useQuiz = () => useContext(QuizContext);
