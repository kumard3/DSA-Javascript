// strs = ["flower", "flow", "flight"];
// strs = ["dog", "racecar", "car"];

// var longestCommonPrefix = function (strs) {
//   if (strs.length <= 1) {
//     console.log(strs[0]);
//   }
//   for (var i = 0; i < strs.length; i++) {
//       console.log(strs[i].slice(0, 2) ===
//       (strs[i + 1] === undefined
//         ? strs[strs.length - 1].slice(0, 2)
//         : strs[i + 1].slice(0, 2)))
//   }
//   return console.log("ff")i
// };

// var longestCommonPrefix = function (strs) {
//   for (let i = 0; i < strs.length; i++) {

//     if (strs[i + 1] === undefined) {
//       return strs[i++];
//     }else{

//       return  console.log(strs[i], strs[i ++]);
//     }
//   }
// };

var longestCommonPrefix = function (strs) {
    let prefix = strs[0];
  
    // Iterate through all strings while prefix is not an empty string
    for (let i = 1; i < strs.length && prefix !== ''; i++) {
      const string = strs[i];
      let j = 0;
      
      // While the same position in the current string and the prefix match, increment j
      while (string[j] && string[j] === prefix[j]) {
        j++;
      }
      
      // Update our prefix to the iterated index
      prefix = string.substring(0, j);
    }
    
    return prefix;
  
};

console.log(longestCommonPrefix(["ab", "a",]));
