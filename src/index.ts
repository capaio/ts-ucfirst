export const ucfirst = <Word extends string>(word: Word): Capitalize<Word> => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() as Capitalize<Word>;
};