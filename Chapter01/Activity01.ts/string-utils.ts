const toTitleCase = function (words: string): string {
  let newWord = words.split(" ");
  let changedWords: string[] = [];
  newWord.map((word) => {
    let slicedword = word.slice(0, 1);
    changedWords.push(
      slicedword.toUpperCase() + word.slice(1, word.length).toLowerCase()
    );
    return changedWords;
  });
  return changedWords.join(" ");
};
// "war AND peace" => "War And Peace"
// "Catcher in the Rye" => "Catcher In The Rye"
// "tO kILL A mOCKINGBIRD" => "To Kill A MockingBird"
console.log(toTitleCase("war AND peace"));
console.log(toTitleCase("Catcher in the Rye"));
console.log(toTitleCase("tO kILL A mOCKINGBIRD"));

const countWords = function (words: string): number {
  let splittedWords = words.split(/[ _-]/);
  return splittedWords.length;
};

// "War and Peace" => 3
// "catcher-in-the-rye" => 4
// "for_whom the-bell-tolls" => 5
console.log(countWords("War and Peace"));
console.log(countWords("catcher-in-the-rye"));
console.log(countWords("for_whom the-bell-tolls"));

const toWords = function (words: string): string[] {
  let splittedWords = words.split(/[ _-]/);
  return splittedWords;
};

// "War and Peace" => [War, and, peace]
// "catcher-in-the-rye" => [catcher, in, the, rye]
// "for_whom the-bell-tolls"=> [for, whom, the, bell, tolls]
console.log(toWords("War and Peace"));
console.log(toWords("catcher-in-the-rye"));
console.log(toWords("for_whom the-bell-tolls"));

const repeat = function (word: string, times: number): string {
  if (times === 0) return "";
  let i;
  for (i = 1; i < times; i++) {
    word += word;
  }
  return word;
};
// "War", 3 => "WarWarWar"
// "rye", 1 => "rye"
// "bell", 0 => ""
console.log(repeat("War", 3));
console.log(repeat("rye", 1));
console.log(repeat("bell", 0));

const isAlpha = function (words: string): boolean {
  const alphaRegex = /^[a-z]*$/i;
  const result = alphaRegex.test(words);
  return result;
};
// "War and Peace" => false
// "Atonement" => true
// "1Q84" => false
console.log(isAlpha("War and Peace"));
console.log(isAlpha("Atonement"));
console.log(isAlpha("1Q84"));
