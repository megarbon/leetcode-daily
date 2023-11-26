/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const leftProducts: number[] = new Array(n).fill(1);
  const rightProducts: number[] = new Array(n).fill(1);
  let leftProduct = 1;
  let rightProduct = 1;

  // Calcular productos por la izquierda
  for (let i = 1; i < n; i++) {
    leftProduct *= nums[i - 1];
    leftProducts[i] = leftProduct;
  }

  // Calcular productos por la derecha
  for (let i = n - 2; i >= 0; i--) {
    rightProduct *= nums[i + 1];
    rightProducts[i] = rightProduct;
  }

  // Calcular el resultado
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    result.push(leftProducts[i] * rightProducts[i]);
  }

  return result;
}
