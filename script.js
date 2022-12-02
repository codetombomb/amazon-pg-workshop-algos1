console.log("hello")

function recursion(num){
    // condition - can the loop continue?
    // update the num = num - 1 
    // call the function from within itself - recursion(num)
    console.log("running")
    recursion()
}

// recursion(10)
// const nums = [1,2,3,4]

// function totalNums(arr){
//     let total = 0
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i]
//     }

//     return total
// }

// console.log(totalNums(nums))

const nums = [1,2,3,4]

const addAll = (nums) => {
    // Base case 
    debugger
    if (nums.length === 0){
        return 0
    }
    // Call addAll 
    // if we call pop() on the arr:
        // reduces the length 
        // returns the el that was removed
    const popped = nums.pop()
    debugger
    return popped + addAll(nums)
}

console.log(addAll(nums))