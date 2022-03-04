var romanToInt = function (s) {
  let int = 0;
  var symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  for (let i = 0; i < s.length; i++) {
    if (symbolMap[s[i]] < symbolMap[s[i + 1]]) {
      int += symbolMap[s[i] + s[i + 1]];
      ++i
    } else {
      int += symbolMap[s[i]];
    }
  }
return int
};

console.log(romanToInt("MCMXCIV"));
