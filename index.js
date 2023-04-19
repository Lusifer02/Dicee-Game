// Rndm img1  
// lengthy but fully expresive code

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceimage = "dice" + randomNumber1 + ".png";     //to select dice1.png to dice6.png

var randomImagesource = "images/" + randomDiceimage;      //to select images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesource);




//rndm img2
//short and to the point code

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagesource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);




//change the heading according to the winner

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins🏆";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins🏆";
}
else{
    document.querySelector("h1").innerHTML="Draw!🙃"
}
