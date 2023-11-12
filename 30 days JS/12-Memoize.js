/*
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 
*/

/**
 * @param {Function} fn
 * @return {Function}
 */

const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);
const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

let memoize = (fn) => {
	const cache = new Map();
	const callCount = { count: 0 };
	return (...args) => {
		const key = JSON.stringify(args);
		if (cache.has(key)) {
			// If the result is already cached, return it
			return cache.get(key);
		} else {
			// If not, call the original function, cache the result, and update call count
			const result = fn(...args);
			cache.set(key, result);
			callCount.count++;
			return result;
		}
	};
};
