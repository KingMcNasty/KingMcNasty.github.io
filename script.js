console.log("sup");

function calculate() {
  const height = document.getElementById("height").value;
  const length = document.getElementById("length").value;

  const result = height * length;

  document.getElementById("result").innerHTML = result;
}

function clear() {
  console.log("/");
  const height = document.getElementById("height");
  const length = document.getElementById("length");

  height.value = "";
  length.value = "";
  document.getElementById("result").innerHTML = "";
}

document.getElementById("submit").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", clear);
