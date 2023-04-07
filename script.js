document.getElementById("apothem").addEventListener("onchange", calculate);

function calculate(e) {
console.log(e)
}

function gethexmeasurements() {
  const apothem = document.getElementById("apothem").value;
  const stoslength = document.getElementById("stoslength").value;
  const perimeterlength = document.getElementById("perimeterlength").value;
  const areasize = document.getElementById("areasize").value;
  const sidelength = document.getElementById("sidelength").value;
  const ctovlength = document.getElementById("ctovlength").value;
  const vtovLength = document.getElementById("vtovLength").value;
 
  return{
    apothem,
    stoslength,
    perimeterlength,
    areasize,
    sidelength,
    ctovlength,
    vtovLength,
    }

}

function setmeasurements(measurements) {
  const apothem = document.getElementById("apothem").value;
  const stoslength = document.getElementById("stoslength").value;
  const perimeterlength = document.getElementById("perimeterlength").value;
  const areasize = document.getElementById("areasize").value;
  const sidelength = document.getElementById("sidelength").value;
  const ctovlength = document.getElementById("ctovlength").value;
  const vtovLength = document.getElementById("vtovLength").value;

  apothem.value = measurements.apothem
  stoslength.value = measurements.stoslength
  perimeterlength.value = measurements.perimeterlength
  areasize.value = measurements.areasize
  sidelength.value = measurements.sidelength
  ctovlength.value = measurements.ctovlength
  vtovLength.value = measurements.vtovLength
}
