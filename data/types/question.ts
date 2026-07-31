export interface Option {
  id: string;
  text: string;
  score: number;
}

export interface Question {
  id: number;
  category:string;
  question: string;
  options: Option[];
}