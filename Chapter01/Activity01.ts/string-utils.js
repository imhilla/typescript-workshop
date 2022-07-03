var toTitleCase = function (words) {
    var newWord = words.split(" ");
    var changedWords = [];
    newWord.map(function (word) {
        var slicedword = word.slice(0, 1);
        changedWords.push(slicedword.toUpperCase() + word.slice(1, word.length).toLowerCase());
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
var countWords = function (words) {
    var splittedWords = words.split(/[ _-]/);
    return splittedWords.length;
};
// "War and Peace" => 3
// "catcher-in-the-rye" => 4
// "for_whom the-bell-tolls" => 5
console.log(countWords("War and Peace"));
console.log(countWords("catcher-in-the-rye"));
console.log(countWords("for_whom the-bell-tolls"));
