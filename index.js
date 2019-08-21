let randomNumber1 = Math.round(Math.random()*5)+1;
document.querySelector(".img1").src = `./images/dice${randomNumber1}.png`;
let randomNumber2 = Math.round(Math.random()*5)+1;
document.querySelector(".img2").src = `./images/dice${randomNumber2}.png`;
if(randomNumber1 > randomNumber2){
    document.querySelector(".container > h1").innerHTML = "Player1 Wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector(".container > h1").innerHTML = "Player2 Wins!";
}else {
    document.querySelector(".container > h1").innerHTML = "Its a Draw!";
}