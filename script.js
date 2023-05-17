console.log("ver xxx")
document.getElementById("apothem").addEventListener("change", calculate);
document.getElementById("stoslength").addEventListener("change", calculate);

var number = 1.58;
var resultElement = document.getElementById("version");
resultElement.textContent = "ver: " + number;

function calculate(e) {
  console.log(e);
  const name = e.target.name;
  const value = e.target.value;
  if (name === "apothem") {
    const measurements = {
      apothem: value,
      stoslength: value * 2,
      perimeterlength: (12 * value) / Math.sqrt(3),
      areasize: value * ((12 * value) / Math.sqrt(3)) / 2,
      sidelength: 2 * (value / Math.sqrt(3)),
      ctovlength: (2 * value) / Math.sqrt(3),
      vtovLength: 2 * ((2 * value) / Math.sqrt(3)),
    };
    setmeasurements(measurements);
  }
  if (name === "stoslength") {
    const measurements = {
      apothem: value / 2,
      stoslength: value,
      perimeterlength: 2 * Math.sqrt(3) * value,
      areasize: (1/4) * Math.sqrt(3) * Math.pow(value * 2, 2),
      sidelength: (2 / Math.sqrt(3)) * (value / 2),
      ctovlength: value / Math.sqrt(3),
      vtovLength: 2 * value / Math.sqrt(3),
    };
    setmeasurements(measurements);
  }
}

function setmeasurements(measurements) {
  console.log(measurements);
  const apothem = document.getElementById("apothem");
  const stoslength = document.getElementById("stoslength");
  const perimeterlength = document.getElementById("perimeterlength");
  const areasize = document.getElementById("areasize");
  const sidelength = document.getElementById("sidelength");
  const ctovlength = document.getElementById("ctovlength");
  const vtovLength = document.getElementById("vtovLength");

  apothem.value = measurements.apothem;
  stoslength.value = measurements.stoslength;
  perimeterlength.value = measurements.perimeterlength;
  areasize.value = measurements.areasize;
  sidelength.value = measurements.sidelength;
  ctovlength.value = measurements.ctovlength;
  vtovLength.value = measurements.vtovLength;
}
