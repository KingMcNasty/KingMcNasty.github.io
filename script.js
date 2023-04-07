// console.log("ver1.3")
document.getElementById("apothem").addEventListener("change", calculate);

function calculate(e) {
  console.log(e)
  const name = e.target.name
  const value = e.target.value
  if (name === apothem) {
    const measurements = {
      apothem: value,
      stoslength: value * 2,
      perimeterlength: 4,
      areasize: 4,
      sidelength: 4,
      ctovlength: 4,
      vtovLength: 4,
    }
    setmeasurements(measurements)
  }
  if (name === stoslength) {
    const measurements = {
      apothem: value / 2,
      stoslength: value,
      perimeterlength: 4,
      areasize: 4,
      sidelength: 4,
      ctovlength: 4,
      vtovLength: 4,
    }
    setmeasurements(measurements)
  }
}


function gethexmeasurements() {
  const apothem = document.getElementById("apothem").value;
  const stoslength = document.getElementById("stoslength").value;
  const perimeterlength = document.getElementById("perimeterlength").value;
  const areasize = document.getElementById("areasize").value;
  const sidelength = document.getElementById("sidelength").value;
  const ctovlength = document.getElementById("ctovlength").value;
  const vtovLength = document.getElementById("vtovLength").value;

  return {
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

