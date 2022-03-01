function LinerSearch(array: number[]) {
    const num = 9;
    for (let i in array) {
        if (array[i] === num) {
            return i
        }
    }
    return -1

}

