
let homeScore = document.getElementById("h-score")
let guestScore = document.getElementById("g-score")

let hScore = 0
let gScore= 0

function addOne(){
    hScore+= 1
    homeScore.textContent = hScore
}
function addTwo(){
    hScore+= 2
    homeScore.textContent = hScore
}
function addThree(){
    hScore+= 3
    homeScore.textContent = hScore
}

function addVOne(){
    gScore+= 1
    guestScore.textContent = gScore
}
function addVTwo(){
    gScore+= 2
    guestScore.textContent = gScore
}
function addVThree(){
    gScore+= 3
    guestScore.textContent = gScore
}