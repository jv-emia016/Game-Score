let homeScore = 0
let guestScore = 0
let period = 0
let homeFoul = 0
let guestFoul = 0
let foulHome = document.getElementById("home-foul")
let foulGuest = document.getElementById("guest-foul")
let gamePeriod = document.getElementById("period")
let totalHome = document.getElementById("home-score")
let totalGuest = document.getElementById("guest-score")
let newgameBtn = document.getElementById("newgame-btn")

function add1home() {
    homeScore += 1
    totalHome.textContent = homeScore
    
}


function add2home() {
    homeScore += 2
    totalHome.textContent = homeScore
    
}

function add3home() {
    homeScore += 3
    totalHome.textContent = homeScore
    
}

function add1guest() {
    guestScore += 1
    totalGuest.textContent = guestScore
    
}

function add2guest() {
    guestScore += 2
    totalGuest.textContent = guestScore
    
}

function add3guest() {
    guestScore += 3
    totalGuest.textContent = guestScore
}

// Fouls

function addfoulhome() {
    homeFoul += 1
    foulHome.textContent = homeFoul
}

function addfoulguest() {
    guestFoul += 1
    foulGuest.textContent = guestFoul
}

// Next Round

function nextperiod() {
    totalHome.textContent = 0
    homeScore = 0
    totalGuest.textContent = 0
    guestScore = 0
    period += 1
    gamePeriod.textContent = period
}


// New Game 

function newgame() {
    totalHome.textContent = 0
    homeScore = 0
    totalGuest.textContent = 0
    guestScore = 0
    foulHome.textContent = 0 
    homeFoul = 0
    foulGuest.textContent = 0 
    guestFoul = 0
    gamePeriod.textContent = 0
    period = 0
}



