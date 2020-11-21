let countBs = function(string) {
  let B = 0;
  for (let i = 0; i < string.lenght; i++) {
    if (string[i] == 'B') {
      ++B;
    }
  }
  console.log(B);
};

countBs('Bat');