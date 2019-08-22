var play1 = "Player1";
var play2 = "Player2";
var play1Points = 0;
var play2Points = 0;

// Randomizing function
function randomize() {
    let randomNumber1 = Math.round(Math.random()*5)+1;
    document.querySelector(".img1").src = `./images/dice${randomNumber1}.png`;
    let randomNumber2 = Math.round(Math.random()*5)+1;
    document.querySelector(".img2").src = `./images/dice${randomNumber2}.png`;
    var title = document.querySelector(".container > h1");
    if(randomNumber1 > randomNumber2){
        title.innerHTML = `${play1} Wins!`;
        play1Points++;
    }else if(randomNumber1 < randomNumber2){
        title.innerHTML = `${play2} Wins!`;
        play2Points++;
    }else {
        title.innerHTML = "Its a Draw!";
    }
}
document.querySelector("#try").onclick = function(){
    randomize();
    document.querySelector(".player-score").innerHTML = `Number of wins for ${play1}: ${play1Points} & Number of wins for ${play2}: ${play2Points}`;
}
// Name change toggler

document.querySelector(".input-toggle").onclick = function() {
    if(document.querySelector(".userinput").classList.contains("hidden")){
        document.querySelector(".userinput").classList.remove("hidden");
    }
    else{
        document.querySelector(".userinput").classList.add("hidden");
    }
}
// Name change value 

document.querySelector(".name-change").onclick = function(){
    event.preventDefault();
    play1 = document.querySelector(".player1 input").value;
    play2 = document.querySelector(".player2 input").value;
    if(play1 == ""){
        play1 = "Player1";
    }
    if (play2 == ""){
        play2 = "Player2";
    }
    document.querySelector(".player1-name").innerHTML= play1;
    document.querySelector(".player2-name").innerHTML= play2;
    document.querySelector(".userinput").classList.add("hidden");
    
}


