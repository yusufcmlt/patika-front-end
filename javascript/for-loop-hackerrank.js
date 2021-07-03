function vowelsAndConsonants(s) {
  const vowels = "aeiou";
  const sArray = s.split("");

  sArray.map((letter) => {
    vowels.includes(letter) ? console.log(letter) : null;
  });
  sArray.map((letter) => {
    !vowels.includes(letter) ? console.log(letter) : null;
  });
}

vowelsAndConsonants("javascriptloops");
