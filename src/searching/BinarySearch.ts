function binarySearch(array:number[], num:number) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= num) {
        for (let i = Math.floor(array.length / 2); i <= array.length; i++) {
          if (array[i] === num) {
            return i;
          }
        }
      }
      if (array[i] === num) {
        return i;
      }
    }
    return -1
  }
  console.log(binarySearch([1, 2, 3, 4, 5,6,7,8,9,10,11,12,13], 2));
  