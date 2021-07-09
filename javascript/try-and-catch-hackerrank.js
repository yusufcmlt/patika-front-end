function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log(s);
  }
}

reverseString(Number(1234));
