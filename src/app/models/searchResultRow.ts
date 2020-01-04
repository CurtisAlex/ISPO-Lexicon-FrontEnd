// export class SearchResultRow {
//   id: number;
//   knownLangWord: string;
//   unknownLangWord: string;
//   knownLangDescription: string;
//   unknownLangDescription: string;
//   isoStandard: boolean;
// }

export class SearchResultRow {
  word: string;
  description: string;
  pinyin: string;
  termStd?: string;
}
