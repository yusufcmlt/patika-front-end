import fetch from "node-fetch";

async function getData() {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json(); //Users i bekle

  console.log(data);
}

getData();
