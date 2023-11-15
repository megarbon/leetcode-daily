/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, 
return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	//casos en los que una flor puede plantarse es flowerbed[0] si la siguiente esta vacia
	//y flowerbed[flowerbed.length - 1] si la anterior esta vacia
	//flowerbed[i] si la anterior y la siguiente estan vacias
	for (let i = 0; i < flowerbed.length; i++) {
		if (
			(i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] !== 1) ||
			(i === flowerbed.length - 1 &&
				flowerbed[i] === 0 &&
				flowerbed[i - 1] !== 1) ||
			(flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1)
		) {
			flowerbed[i] = 1;
			n--;
		}
	}
	return n <= 0;
};
