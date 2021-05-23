import { Category, Quiz } from "./quiz.type";
import skills from "./Assets/skills.jpg";
import { quiz1 } from "./quiz1";
import { quiz2 } from "./quiz2";
import { quiz3 } from "./quiz3";
export const colors = {
  orange: {
    900: "#db1d08",
    700: "#fc452e",
  },
};
export const fonts = {
  heading: "Poppins",
  body: "Poppins",
};
export const quizzes: Quiz[] = [
  quiz1,quiz2,quiz3
];

export const categories: Category[] = [
  {
    _id: "1",
    categoryName: "Skills",
    image: skills,
  },
  {
    _id: "2",
    categoryName: "Tournaments",
    image: skills,
  },
  {
    _id: "3",
    categoryName: "General knowledge",
    image: skills,
  },
];
