export type TypeListInsertValue = {
  value: string;
  index: number;
};

export interface Question  {
  type:string;
  body:string;
  answer:string[];
};

export interface ChoiceQuestion extends Question {
  selections:string[];
};