<!--
Note - Any content mentioned below in `<!-- ->` blocks are just comments
to help in filling up the issue. It won't be visible in the actual issue after
submitting the issue.
-->

### LeetCode Username

Mel4k

### Problem number, title, and link

[2629. Function Composition](https://leetcode.com/problems/function-composition/)

### Category of the bug

- [ ] Problem description
- [ ] Solved examples
- [ ] Problem constraints
- [ ] Problem hints
- [ ] Incorrect or missing "Related Topics"
- [x] Incorrect test Case _(Output of test case is incorrect as per the problem statement)_
- [ ] Missing test Case _(Incorrect/Inefficient Code getting accepted because of missing test cases)_
- [ ] Editorial
- [ ] Programming language support

### Description of the bug

The provided test case on problem Function Composition is incorrect.

Issue Description:
The provided test case on problem Function Composition appears to be incorrect. The test case is as follows:

compose([x => x + 1, x => x * x, x => 2 * x])(4)

The expected result mentioned in the problem description is 65, but based on the composition of functions, the correct result should be 50.

### Language used for code

JavaScript

### Code used for Submit/Run operation

```javascript
var compose = function (functions) {
	return function (x) {
		return functions.reduce((accumulator, actualFunction) => {
			return actualFunction(accumulator);
		}, x);
	};
};
```

### Expected behavior

The test should have passed with the result of 50, but it fails because the expected output is incorrectly set to 65.

### Screenshots

<!-- If applicable, add screenshots to explain the issue. -->

### Additional context

<!-- Add any other additional context about the bug. -->
