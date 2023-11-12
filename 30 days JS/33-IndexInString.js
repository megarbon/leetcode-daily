/*
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

*/

function strStr(haystack, needle) {
	const haystackLength = haystack.length;
	const needleLength = needle.length;

	for (let i = 0; i <= haystackLength - needleLength; i++) {
		if (haystack.substring(i, i + needleLength) === needle) {
			return i;
		}
	}
	return -1;
}
