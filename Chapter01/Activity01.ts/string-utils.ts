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
