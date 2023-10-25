// Temperature Unit Converter
// Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let select = document.getElementById("selectconvertion").value;
  let input = +document.getElementById("temp").value;
  console.log(input);
  if (select === "ctf") {
    output = (input * 9) / 5 + 32;
  } else if (select === "ftc") {
    output = ((input - 32) * 5) / 9;
  }
  document.getElementById("result").innerHTML = output;
}
