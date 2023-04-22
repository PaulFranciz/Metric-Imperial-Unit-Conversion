let inputField = document.getElementById("input-el")
let btn = document.getElementById("btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let deleteBtn = document.getElementById("btn-del")
const meterToFeet = 3.281
const feetToMeter = 0.3048
const literToGallon = 0.264
const gallonToLiter = 3.7854
const kiloToPound = 2.205
const poundToKilo = 0.454

btn.addEventListener("click", () => {
  let inputValue = inputField.value
  lengthEl.textContent = `${inputValue} Meters = ${(
    inputValue * meterToFeet
  ).toFixed(2)} Feets | ${inputValue} Feets = ${(
    inputValue * feetToMeter
  ).toFixed(2)} Meters `

  volumeEl.textContent = `${inputValue} Liters = ${(
    inputValue * literToGallon
  ).toFixed(2)} Gallons | ${inputValue} Gallons = ${(
    inputValue * gallonToLiter
  ).toFixed(2)} Liters `

  massEl.textContent = `${inputValue} Kilos = ${(
    inputValue * kiloToPound
  ).toFixed(2)} Pounds | ${inputValue} Pounds = ${(
    inputValue * poundToKilo
  ).toFixed(2)} Kilos`

  //inputField.value = ""
})

deleteBtn.addEventListener("click", () => {
  inputField.value = ""
  lengthEl.textContent = ` 0 Meter = 0.000 Feet | 0 Feet = 0.000 Meter`
  volumeEl.textContent = ` 0 Liter = 0.000 Gallon | 0 Gallon = 0.000 Liter`
  massEl.textContent = `0 Kilo = 0.000 Pound | 0 Pound = 0.000 Kilo`
})
