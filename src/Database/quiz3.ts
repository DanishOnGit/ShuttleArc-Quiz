import { Quiz } from "./quiz.type";
import rules from "./Assets/rules.jpg";
export const quiz3:Quiz={
    
        _id: "3",
        categoryName: "Game Rules",
        quizName: "Game Rules",
        score: 0,
        image:rules,
        totalQuestions: 5,
        questions: [
          {
            _id: "1",
            points: 2,
            negativePoints:1,
            question: "In which year did Badminton become an Olympic sport?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "1992",
              },
              {
                _id: "2",
                isRight: false,
                text: "2000",
              },
            ],
          },
          {
            _id: "2",
            points: 2,
            negativePoints:1,
            question: "How many feathers should be in a shuttle?",
            options: [
              {
                _id: "1",
                isRight: false,
                text: "18",
              },
              {
                _id: "2",
                isRight: true,
                text: "16",
              },
            ],
          },
          {
            _id: "3",
            points: 2,
            negativePoints:1,
            question: "Who is the Youngest Badminton Player to represent Indian at Championship?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "Saina Nehwal",
              },
              {
                _id: "2",
                isRight: false,
                text: "Kidambi Srikanth",
              },
            ],
          },
          {
            _id: "4",
            points: 2,
            negativePoints:1,
            question: "Who was the first Indian badminton Player to hold number one rank in World Rankings?",
            options: [
              {
                _id: "1",
                isRight: false,
                text: "Chetan Anand",
              },
              {
                _id: "2",
                isRight: true,
                text: "Prakash Padukone"
              },
            ],
          },
          {
            _id: "5",
            points: 2,
            negativePoints:1,
            question: "What is the standard height of a badminton net at the center of the court?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "5 feet",
              },
              {
                _id: "2",
                isRight: false,
                text: "4.75 feet",
              },
            ],
          },
        ],
      
}