function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      }
    } else {
      obj[char] = 1;
    }
  }
}

function sqaureNumbers() {
  var obj1 = [1, 2, 3, 4, 5];
  var obj2 = [1, 3, 4, 25, 16];

  for (let i = 0; i < obj1.length; i++) {
    let currenindex = obj2.indexOf(obj1[i] ** 2);

    if (currenindex === -1) {
      return false;
    }
    console.log(currenindex);
    obj2.splice(currenindex, 1);
  }
  return true;
}

//frequencyCounter

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let frequencyCount1 = {};
  let frequencyCount2 = {};

  for (const value of string1) {
    frequencyCount1[value] = ++frequencyCount1[value] || 1;
  }

  for (const value of string2) {
    frequencyCount2[value] = ++frequencyCount2[value] || 1;
  }
  for (const key in frequencyCount1) {
    if (!(key in frequencyCount2)) {
      return false;
    }
    if (frequencyCount2[key] !== frequencyCount1[key]) {
      return false;
    }
  }
  return true
}

//pointer pattern 

// function pointerPattern (arr){
//   left = 0;
//   right  = arr.length -1
//   while (left < right) {
//     if()
//   }
// }
