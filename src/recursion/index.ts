//factorial 
function factorial(num: number) {
    let total = 1;
    for (let i = num; i >= 1; --i) {
        console.log(i)
    }

}

function factorialRecursive(num: number) {
    if (num === 0) {
        return 1;
    }
    console.log(num)
    return num * factorialRecursive(num - 1)

}
function ReverseRecursive(st: string) {
    if (st.length === 0) {
        return st;
    }

    return ReverseRecursive(st.slice(1)) + st[0]

}

function  isPalindrome(st: string){
    if (st.length === 0) {
        return st;
    }

    return (isPalindrome(st.slice(1)) + st[0]) === st
}



//power
function Power(n: number, p: number) {
    if (p === 1) { return 1 }
    return n * Power(n, p - 1)
}


//recursive collectOddValues
function collectOddValues(array: number[]) {
    let result = []
    const helper = (arr: number[]) => {
        if (arr.length === 0) {
            return;
        }
        if (arr[0] % 2 !== 0) {
            result.push(arr[0])
        }
        helper(arr.slice(1))
    }
    helper(array)

    console.log(result)
}


//recursive sum of value in an array 

function SumOfArray(array: number[]) {
    let result = 0
    const helper = (arr: number[]) => {
        if (arr.length === 0) {
            return;
        }
        result += arr[0]

        helper(arr.slice(1))
    }
    helper(array)
    console.log(result)
}

//recursive range 


function SumRecursive(num: number) {

    if (num === 0) {
        return 0
    }
    return num + SumRecursive(num - 1)

}

function fib(num: number) {
    if (num === 0) {
        return 1
    }
    return num - fib(num - 1)
    // add whatever parameters you deem necessary - good luck!  
}


const test = "heelo"
const arr = test.split("")
console.log(arr)
console.log(arr[arr.length - 2])

for (let i = 0; i < arr.length; i++) {
    console.log("first")
}