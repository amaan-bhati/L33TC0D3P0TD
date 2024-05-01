var reversePrefix = function (word, ch) {
    word.split('')
    let i = word.indexOf(ch)

    return word.slice(0, i + 1).split('').reverse().join('') + word.slice(i + 1)
};
