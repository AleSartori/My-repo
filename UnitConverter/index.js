const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function meterToFeet(){
    const baseValue =inputEl.value
    const toFeet = baseValue * 3.281
    let toMeter = baseValue/ toFeet
    lengthEl.textContent = `${baseValue} meters = ${toFeet.toFixed(3)} feet / 
        ${baseValue} feet = ${toMeter.toFixed(3)} meters`
}

function literToGallon(){
    const baseValue =inputEl.value
    const toGallon = baseValue * 0.264
    let toLiter = baseValue / toGallon
    volumeEl.textContent = `${baseValue} liters = ${toGallon.toFixed(3)} gallons /
    ${baseValue} gallons = ${toLiter.toFixed(3)} liters`
}

function kiloToPound (){
    const baseValue = inputEl.value
    const toPound = baseValue * 2.204
    let toKilo = baseValue / toPound
    massEl.textContent = `${baseValue} kilos = ${toPound.toFixed(3)} pounds /
    ${baseValue} pounds / ${toKilo.toFixed(3)} kilos`
}

convertBtn.addEventListener("click", function() {
    meterToFeet()
    literToGallon()
    kiloToPound()
})