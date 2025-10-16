
let hs = 0
let gs = 0
function plus_one_h(){
    hs++
    document.getElementById("home-score").textContent = hs
    leader()
}
function plus_two_h(){
    hs+=2
    document.getElementById("home-score").textContent = hs
    leader()
}
function plus_three_h(){
    hs+=3
    document.getElementById("home-score").textContent = hs
    leader()
}
function plus_one_g(){
    gs++
    document.getElementById("guest-score").textContent = gs
    leader()
}
function plus_two_g(){
    gs+=2
    document.getElementById("guest-score").textContent = gs
    leader()
}
function plus_three_g(){
    gs+=3
    document.getElementById("guest-score").textContent = gs
    leader()
}

function leader(){
    if(hs===gs){
        document.getElementById("guest-score").classList.remove("highlight");
        document.getElementById("home-score").classList.remove("highlight");
    }
    else if(hs>gs){
        document.getElementById("guest-score").classList.remove("highlight");
        document.getElementById("home-score").classList.add("highlight");
    }else{
        document.getElementById("home-score").classList.remove("highlight");
        document.getElementById("guest-score").classList.add("highlight");
    }
}

function resetScores(){
    hs = 0
    gs = 0
    document.getElementById("guest-score").textContent = 0
    document.getElementById("home-score").textContent = 0
    leader()
}