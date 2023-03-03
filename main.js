let serialDiv = document.querySelector(".serial");
let btn = document.querySelector(".generate");

let neededChar = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

btn.onclick = function () {
  let randomserialArray = "";
  let serialNumberlength = 8;
  for (let i = 0; i < serialNumberlength; i++) {
    let x = Math.floor(Math.random() * neededChar.length);
    let randomChar = neededChar[x];
    randomserialArray += randomChar;
  }
  serialDiv.innerHTML =
    randomserialArray.slice(0, 4) + "-" + randomserialArray.slice(4, 8);
};
