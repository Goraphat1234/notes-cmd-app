// let number1 = 10;
// let number2 = 3.14;
// let character = 'A';
// let str = "Hello, World"
// let isRaining = false
// let numbers = [1, 2, 3, 4, 5]

// let r = 2
// let pi = 3.14
// let circleArea = pi * Math.pow(r, 2)
// console.log(circleArea)

// if (r < 10) {
//     console.log('r is less than 10')
// } else if (r < 20) {
//     console.log('r is less than 20')
// } else {
//     console.log('r is greather than 20')
// }

// let nums = [100.0, 200.0, 300.0, 400.0, 500.0, 600.0]
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i] + ' ' + ' Hello')
// }

// let isRaining = true
// while (isRaining) {
//     console.log('drip drip...')
// }

/** Function */
function mySum(a, b) {
    let result = a + b
    return result
}

let result = mySum(1, 2)
console.log(result)

function calculateCircleArea(r) {
    return  3.14 * r * r
}
console.log(calculateCircleArea(2))
