/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/


function reverseVowels(str: string): string {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    const strArray: string[] = [...str];
    let start = 0;
    let end = strArray.length - 1;

    while (start < end) {
        // Encuentra la primera vocal desde el inicio
        while (start < end && !isVowel(strArray[start], vowels)) {
            start++;
        }

        // Encuentra la primera vocal desde el final
        while (start < end && !isVowel(strArray[end], vowels)) {
            end--;
        }

        // Intercambia las vocales
        [strArray[start], strArray[end]] = [strArray[end], strArray[start]];

        // Mueve los índices hacia el centro
        start++;
        end--;
    }

    return strArray.join("");
}

const isVowel = (char: string, vowels: string[]): boolean => {
    return vowels.includes(char.toLowerCase());
};
