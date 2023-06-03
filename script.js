console.log("ver xxx");
document.getElementById("apothem").addEventListener("change", calculate);
document.getElementById("stoslength").addEventListener("change", calculate);
document.getElementById("perimeterlength").addEventListener("change", calculate);
document.getElementById("areasize").addEventListener("change", calculate);
document.getElementById("sidelength").addEventListener("change", calculate);
document.getElementById("ctovlength").addEventListener("change", calculate);
document.getElementById("vtovLength").addEventListener("change", calculate);

var number = 1.7;
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
      sidelength: 2 * value / Math.sqrt(3),
      ctovlength: 2 * value / Math.sqrt(3),
      vtovLength: 2 * ((2 * value) / Math.sqrt(3)),
    };
    setmeasurements(measurements);
  }
  if (name === "stoslength") {
    const measurements = {
      apothem: value / 2,
      stoslength: value,
      perimeterlength: 2 * Math.sqrt(3) * value,
      areasize: 6 * (1/4) * Math.sqrt(3) * Math.pow((2 / Math.sqrt(3)) * (value / 2), 2),
      sidelength: (2 / Math.sqrt(3)) * (value / 2),
      ctovlength: value / Math.sqrt(3),
      vtovLength: 2 * value / Math.sqrt(3),
    };
    setmeasurements(measurements);
  }
  if (name === "perimeterlength") {
    const measurements = {
      apothem: Math.sqrt(3) / 12 * value,
      stoslength: value / (2 * Math.sqrt(3)),
      perimeterlength: value,
      areasize: (Math.sqrt(3) * Math.pow(value, 2)) / 24,
      sidelength: value / 6,
      ctovlength: value / 6,
      vtovLength: value / 3,
    };
    setmeasurements(measurements);
  }
  if (name === "areasize") {
    const measurements = {
      apothem: Math.sqrt(value/(2 * Math.sqrt(3))),
      stoslength: Math.sqrt((2 * value)/Math.sqrt(3)),
      perimeterlength: Math.sqrt(8 * Math.sqrt(3) * value),
      areasize: value,
      sidelength: Math.sqrt((2 * value)/(3 * Math.sqrt(3))),
      ctovlength: (Math.sqrt((8 * value)/(3 * Math.sqrt(3))))/2,
      vtovLength: Math.sqrt((8 * value)/(3 * Math.sqrt(3)),
    };
    setmeasurements(measurements);
  }
  if (name === "sidelength") {
    const measurements = {
      apothem: 4,
      stoslength: 4,
      perimeterlength: 4,
      areasize: 4,
      sidelength: value,
      ctovlength: 4,
      vtovLength: 4,
    };
    setmeasurements(measurements);
  }
  if (name === "ctovlength") {
    const measurements = {
      apothem: 4,
      stoslength: 4,
      perimeterlength: 4,
      areasize: 4,
      sidelength: 4,
      ctovlength: value,
      vtovLength: value * 2,
    };
    setmeasurements(measurements);
  }
  if (name === "vtovLength") {
    const measurements = {
      apothem: value * Math.sqrt(3) / 4,
      stoslength: value * Math.sqrt(3) / 2,
      perimeterlength: value * 3,
      areasize: (3 * Math.sqrt(3) * Math.pow(value / 2, 2)) / 2,
      sidelength: value / 2,
      ctovlength: value / 2,
      vtovLength: value,
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
