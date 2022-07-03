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
