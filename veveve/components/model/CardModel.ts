export class CardModel {
  id: number;
  titel: string;
  content: string;
  ekstra: string;

  constructor(id: number, titel: string, content: string, ekstra: string) {
    this.id = id;
    this.titel = titel;
    this.content = content;
    this.ekstra = ekstra;
  }
}
