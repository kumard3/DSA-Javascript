function binarySearch(array:number[], num:number) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= num) {
        for (let i = Math.floor(array.length / 2); i <= array.length; i++) {
          if (array[i] === num) {
            return i;
          }
        }
      } else if (array[i] <= num) {
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
          if (array[i] === num) {
            return i;
          }
        }
      }
    }
    return -1
  }
  console.log(binarySearch([1, 2, 3, 4, 5], 5));
  