import { Quiz } from "./quiz.type";
import skillImg from "./Assets/skills.jpg"
export const quiz1:Quiz={
    
        _id: "1",
        categoryName: "Skills",
        quizName: "Skills",
        image:skillImg,
        score: 0,
        totalQuestions: 5,
        questions: [
          {
            _id: "1",
            points: 2,
            negativePoints:1,
            question: "Which of these is a fault when serving",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "Hitting feathers of shuttle first",
              },
              {
                _id: "2",
                isRight: false,
                text: "Hitting the cork of the shuttle first",
              },
            ],
          },
          {
            _id: "2",
            points: 2,
            negativePoints:1,
            question: "When a birdie is hit back and forth together in badminton, it is called",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "Rally",
              },
              {
                _id: "2",
                isRight: false,
                text: "Set",
              },
            ],
          },
          {
            _id: "3",
            points: 2,
            negativePoints:1,
            question: "How to play a drop shot?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "punch down",
              },
              {
                _id: "2",
                isRight: false,
                text: "drive long",
              },
            ],
          },
          {
            _id: "4",
            points: 2,
            negativePoints:1,
            question: "Where Racket should point while smashing?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "Downward",
              },
              {
                _id: "2",
                isRight: false,
                text: "Upward",
              },
            ],
          },
          {
            _id: "5",
            points: 2,
            negativePoints:1,
            question: "How to play a clear shot?",
            options: [
              {
                _id: "1",
                isRight: false,
                text: "Slice the shuttle",
              },
              {
                _id: "2",
                isRight: true,
                text: "Drive long",
              },
            ],
          },
        ],
      
}