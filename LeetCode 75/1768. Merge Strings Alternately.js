/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	//the inputs are strings, so we need to convert them to arrays
	word1 = word1.split('');
	word2 = word2.split('');
	let len = word1.length > word2.length ? word1.length : word2.length;
	let result = [];
	//loop the longest array lenght and if there are letters push them to the result one of each word
	for (let i = 0; i < len; i++) {
		word1[i] ? result.push(word1[i]) : result.push('');
		word2[i] ? result.push(word2[i]) : result.push('');
	}
	return result.join('');
};
