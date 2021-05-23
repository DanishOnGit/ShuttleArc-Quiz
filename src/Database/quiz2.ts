import { Quiz } from "./quiz.type";
import trophy from "./Assets/trophy.jpg";
export const quiz2:Quiz={
    
        _id: "2",
        categoryName: "Tournaments",
        quizName: "Tournaments",
        score: 0,
        image:trophy,
        totalQuestions: 5,
        questions: [
          {
            _id: "1",
            points: 2,
            negativePoints:1,
            question: " Which of the tennis Grand Slam tournaments does not share the same name as an international badminton tournament?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "Wimbledon",
              },
              {
                _id: "2",
                isRight: false,
                text: "US Open",
              },
            ],
          },
          {
            _id: "2",
            points: 2,
            negativePoints:1,
            question: "Which of these badminton tournaments is a higher level tournament? ",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "Super Series",
              },
              {
                _id: "2",
                isRight: false,
                text: "Double Series",
              },
            ],
          },
          {
            _id: "3",
            points: 2,
            negativePoints:1,
            question: " When was mixed doubles introduced as a medal sport at the Olympics?",
            options: [
              {
                _id: "1",
                isRight: false,
                text: "2000 Sydney Olympics",
              },
              {
                _id: "2",
                isRight: true,
                text: "1996 Atlanta Olympics",
              },
            ],
          },
          {
            _id: "4",
            points: 2,
            negativePoints:1,
            question: "n Which Stadium India Open Grand Prix Gold tournament held?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "Babu Banarsi Das Indoor Stadium",
              },
              {
                _id: "2",
                isRight: false,
                text: "SAI complex",
              },
            ],
          },
          {
            _id: "5",
            points: 2,
            negativePoints:1,
            question: " Name of the international governing body for badminton recognised by the International Olympic Committee?",
            options: [
              {
                _id: "1",
                isRight: false,
                text: "International Badminton Association – IBA",
              },
              {
                _id: "2",
                isRight: true,
                text: "Badminton World Federation – BWF",
              },
            ],
          },
        ],
      
}