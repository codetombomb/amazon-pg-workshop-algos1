# Algos I

# SWBAT

- [x]  Describe recursion
- [x]  Define ‘base case’
- [x]  Debug recursive functions in JS

# Getting started

To start out, please fork and clone [this repo](https://github.com/codetombomb/amazon-pg-workshop-algos1). 

- `cd` into the repo and run: `open index.html`
- open the dev console and confirm that you see ‘hello’ in the console.

# What is recursion?

- A pattern that we can use to solve problems
- It is a loop

### Wikipedia defines recursion as…

- *a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem*.

## How does it work?

When implementing a recursive solution, there are two main code parts that you will need:

- base case
- call the function from within itself with an updated argument (this is the loop)

## What is a base case?

A base case is a conditional check to see if the recursive loop can continue (much like a condition in a `while` and `for` loops). Usually, this is the first code that is executed inside of an algorithm and `return` is used to break out of the loop.

```jsx
const recursiveFunction = () => {
	if(condition === true) return
	...
}
```

### Example

Create a function `addAll` that takes in an array of number and returns the total sum of the numbers.

```jsx
const arr1 = [1,2,3]
addAll(arr1)
// => 6
```

- Without recursion
    
    Solution 1:
    
    ```jsx
    const addAll = (arr) => {
        let total = 0
        arr.forEach(num => total += num)
        return total
    }
    ```
    
    Solution 2: 
    
    ```jsx
    const addAll = (arr) => {
        return arr.reduce((num, total) => num + total)
    }
    ```
    
- With recursion
    
    ```jsx
    const addAll = (arr) => {
      if (arr.length === 1) return arr[0] // base case
      return arr.pop() + addAll(arr)      // recursive call with modified/reduced original arg
    }
    ```
    

## Resources

- [Workshop notes](https://www.notion.so/Algos-I-5626eb8314bf4c5fb9df86a430ae7227)
- [Colt Steele DS and Algos course](https://www.udemy.com/share/101X5s3@zXK8epyQ00MsMGpCQKVuFAb32hSKaGNcMvXnoGTGMFpppVUfjfjsjk2_cshgbH-F-w==/)
- [Code from workshop](https://github.com/codetombomb/amazon-pg-workshop-algos1)
- [Leetcode Fibonacci Algo (hard)](https://leetcode.com/problems/fibonacci-number/)
- [Practice algos with solutions](https://www.geeksforgeeks.org/recursion-practice-problems-solutions/)
- [Sum triangle algo (easy)](https://www.geeksforgeeks.org/sum-triangle-from-array/)

### Questions that need answers

- Why use recursion over a plain ol loop?
- What limits the callstack? Browser? JS itself?