var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    console.log(stack, "1");
    if (s[i] === "}" && stack[stack.length - 1] === "{") {
      console.log(stack[stack.length - 1], "1");
      stack.pop();
    } else {
      console.log(stack, "2");
      stack.push(s[i]);
    }
  }
  return console.log(stack);
};

console.log(isValid("{}"));
