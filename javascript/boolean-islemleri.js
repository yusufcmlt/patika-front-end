// veya “||” operatörü ilk bulduğu true değeri döner
var a = 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b = 0 || "" || false || -0 || 0; // 0
var c = 0 || "" || "123" || 4; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d = 2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e = 2 && 3 && 5 && 7; // 7

console.log("6" / 2);
console.log([1, 2, 3] > null);
console.log("number" + 15 + 3);
console.log(["x", "y"] == "x,y");
console.log("foo" + +"bar");
console.log("true" == true);

console.log(0 || ("0" && {}));
console.log(["a"] > null);

console.log(!!(10 / "a"));
