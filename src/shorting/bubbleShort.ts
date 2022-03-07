function BubbleShort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp;
            }
        }
    }
    return array
}


function BubbleShortImproved(array: number[]) {
    for (let i = array.length; i < 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp;
            }
        }
    }
    return array
}

console.log(BubbleShortImproved([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))




