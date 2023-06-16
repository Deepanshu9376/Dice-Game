var randnum = Math.floor(Math.random()*6)+1;

var radnomdiceImg="dice" + randnum +".png"; //dice1.png or dice3.png
var radnomImgsrc="images/"+radnomdiceImg; //images/dice1.png

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",radnomImgsrc);

var randnum2=Math.floor(Math.random()*6)+1;
var radnomImgsrc2="images/dice"+randnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",radnomImgsrc2);

if(randnum>randnum2){
    document.querySelector("h1").innerHTML="Player 1 Wins !!";
}
else if(randnum2>randnum){
    document.querySelector("h1").innerHTML="Player 2 Wins !!";
}
else{
    document.querySelector("h1").innerHTML="Draw Game";
}