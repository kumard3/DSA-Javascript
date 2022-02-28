function LinerSearch(array: number[]) {
    const num = 9;
    for (let i in array) {
        if (array[i] === num) {
            return i
        }
    }
    return -1

}


console.log(LinerSearch([1, 2, 3, 4, 5, 6]))