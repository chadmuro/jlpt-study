export type Vocabulary = {
  id: number;
  kanji: string;
  japanese: string;
  english: string;
};

export type Kanji = {
  id: number;
  kanji: string;
  onyomi: string;
  kunyomi: string;
  english: string;
  example: string;
};

export type Grammar = {
  id: number;
  grammar: string;
  english: string;
  background: string;
  conjunction: string;
  sentence: string;
  sentence_english: string;
};
