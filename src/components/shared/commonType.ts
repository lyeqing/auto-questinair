export type TypeListInsertValue = {
  value: string;
  index: number;
};

export type Question = {
  value: string;
  index: number;
  type:string;
  body:string;
  answer:string[];
};