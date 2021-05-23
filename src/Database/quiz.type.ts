export type Option = {
  _id: string;
  text: string;
  isRight: boolean;
  selected?: boolean;
};
export type Question = {
  _id: string;
  question: string;
  options: Option[];
  negativePoints?: number;
  points: number;
};
export type Quiz = {
  _id: string;
  quizName: string;
  image:string,
  categoryName: string;
  userId?: string;
  score: number;
  totalQuestions: number;
  questions: Question[];
};
export type Category = {
  _id: string;
  image:string;
  categoryName: string;
};
