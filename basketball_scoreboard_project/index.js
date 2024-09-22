let addOnePt = document.getElementById("add-point-home1")
let addTwoPt = document.getElementById("add-point-home2")
let addThreePt = document.getElementById("add-point-home3")

let scoreHome = document.getElementById("score-btn1") // Home score btn
let scoreGuest = document.getElementById("score-btn2") // Guest score btn


let homePoint = 0
let guestPoint = 0

// begin with home functions

function addOneHome(){ 
    homePoint += 1  
    scoreHome.textContent = homePoint 
}



 function addTwoHome(){
    homePoint += 2  
     scoreHome.textContent = homePoint 
     
 }



function addThreeHome(){
    homePoint += 3
     scoreHome.textContent = homePoint 
     
}


// Begin with Guest functions

function addOneGuest(){
    guestPoint +=1
    scoreGuest.textContent = guestPoint
}

function addTwoGuest(){
    guestPoint +=2
    scoreGuest.textContent = guestPoint
}

function addThreeGuest(){
    guestPoint +=3
    scoreGuest.textContent = guestPoint
}