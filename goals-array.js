const goals = [2, 0, 3, 1, 4, 0, 2];
let zeroCount = 0;
for (let i = 0; i < goals.length; i++) {
  if (goals[i] === 0) {
    zeroCount++;
  }
}
console.log(zeroCount);
