var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) return false;

    const letters = Array.from({ length: 26 }, () => 0);

    countDistinctLetters(word1, letters);
    const result1 = getResult(letters);

    letters.fill(0);

    countDistinctLetters(word2, letters);
    const result2 = getResult(letters);

    return result1.concatenatedLettersStringResult === result2.concatenatedLettersStringResult &&
        result1.sortedLetterCountStringResult === result2.sortedLetterCountStringResult;
};

const getResult = (array) => {

    return {
        concatenatedLettersStringResult: array.reduce((prevItem, newItem, index) => {
            if (newItem != 0)
                prevItem += String.fromCharCode(index + 97);
            return prevItem;
        }, ''),
        sortedLetterCountStringResult: array.sort((a, b) => a - b).join('')
    };
};

const countDistinctLetters = (string, array) =>
    string.split('').forEach((_, index) => array[string.charCodeAt(index) - 97]++);
    
