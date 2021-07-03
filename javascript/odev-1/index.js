(function () {
  let userName = prompt("Isminizi girin");
  let userText = document.querySelector("#myName");
  userText.innerHTML = userName || "isimsiz";
})();

function showTime() {
  let clock = document.querySelector("#myClock");
  let time = new Date();
  let day = "";
  let hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  let minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  let seconds =
    time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

  switch (time.getDay()) {
    case 0:
      day = "Pazar";
      break;
    case 1:
      day = "Pazartesi";
      break;
    case 2:
      day = "Sali";
      break;
    case 3:
      day = "Carsamba";
      break;
    case 4:
      day = "Persembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
  }

  clock.innerHTML = `${hours}.${minutes}.${seconds} ${day}`;
}

setInterval(showTime, 1000);

let clock = document.querySelector("#myClock");
