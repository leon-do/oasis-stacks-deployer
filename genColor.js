// loop 1234 times
const arr = [];
for (var i = 0; i <= 99; i++) {
  // generate random number between 0 and 16777215 aka ffffff
  arr.push(Math.floor(Math.random() * 16777215));
}

console.log(arr)
