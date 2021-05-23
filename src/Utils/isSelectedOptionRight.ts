import { Option } from "../Database/quiz.type";

export function isSelectedOptionRight(options:Option[]){
const result= options.find(option=>option.isRight && option.selected)
return !!result
}