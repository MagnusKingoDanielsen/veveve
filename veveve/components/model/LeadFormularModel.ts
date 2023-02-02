export class LFQ {
  id: number;
  question: string;
  answer1: string;
  answer1Value: number;
  answer2: string;
  answer2Value: number;
  answer3?: string;
  answer3Value?: number;

  constructor(
    id: number,
    question: string,
    answer1: string,
    answer1Value: number,
    answer2: string,
    answer2Value: number,
    answer3?: string,
    answer3Value?: number
  ) {
    this.id = id;
    this.answer1Value = answer1Value;
    this.answer2Value = answer2Value;
    this.answer3Value = answer3Value;
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
  }
}
