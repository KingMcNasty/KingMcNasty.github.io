console.log("ver1.31")
document.getElementById("apothem").addEventListener("change", calculate);

function calculate(e) {
  console.log(e);
  const name = e.target.name;
  const value = e.target.value;
  if (name === "apothem") {
    const measurements = {
      apothem: value,
      stoslength: value * 2,
      perimeterlength: (12 * value) / Math.sqrt(3),
      areasize: (3 * Math.sqrt(3) * Math.pow(value, 2)) / 2,
      sidelength: 2 * (value / Math.sqrt(3)),
      ctovlength: (2 * value) / Math.sqrt(3),
      vtovLength: 2 * value * Math.sqrt(3),
    };
    setmeasurements(measurements);
  }
  if (name === "stoslength") {
    const measurements = {
      apothem: value / 2,
      stoslength: value,
      perimeterlength: 4,
      areasize: 4,
      sidelength: 4,
      ctovlength: 4,
      vtovLength: 4,
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
