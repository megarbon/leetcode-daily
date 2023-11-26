/*

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.

 

Example 1:

Input: fn = (x) => x * 2, args = [4], t = 35, cancelT = 190
Output: 
[
   {"time": 0, "returned": 8},
   {"time": 35, "returned": 8},
   {"time": 70, "returned": 8},
   {"time": 105, "returned": 8},
   {"time": 140, "returned": 8},
   {"time": 175, "returned": 8}
]

*/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
	const result = [];
	const start = performance.now();
	let intervalId;

	const log = () => {
		const diff = Math.floor(performance.now() - start);
		result.push({ time: diff, returned: fn(...args) });
	};

	// Initial call
	log();

	// Set up the interval
	intervalId = setInterval(log, t);

	// The cancel function
	const cancel = () => clearInterval(intervalId);

	return cancel;
};

// Example usage:
const fn = (x) => x * 2;
const args = [4];
const t = 35;
const cancelT = 190;

const cancel = cancellable(fn, args, t);

// Call cancel after cancelT milliseconds
setTimeout(() => {
	cancel();
}, cancelT);

// Display the result after cancelT + t + 15 milliseconds
setTimeout(() => {
	console.log(result);
}, cancelT + t + 15);
