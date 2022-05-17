/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').filter(string => string !=='').reverse().join(' ');
};

const s = "the sky is blue";

console.log(reverseWords(s));

