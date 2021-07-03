var money = 4;
var canBuy =
  money < 17
    ? "Satın alamazsın.."
    : money > 30
    ? "Satın alabilirsin.."
    : "Para miktarını girmen gerekmektedir..";

console.log(canBuy); // "Satın alabilirsin.."
