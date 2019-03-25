var UserChoice =["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var ComputerChoice =["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var UserChoice=document.getElementById("Userchoice-text");
var ComputerChoice=document.getElementById("ComputerChoice-text");
document.onkeyup=function(event){

}
var UserChoice=event.key
if((UserChoice==="q")) if((UserChoice==="w")) if((UserChoice==="e")) if((UserChoice==="r")) if((UserChoice==="t")) if((UserChoice==="y")) if((UserChoice==="u"))
if((UserChoice==="i")) if((UserChoice==="o")) if((UserChoice==="p")) if((UserChoice==="a")) if((UserChoice==="s")) if((UserChoice==="d")) if((UserChoice==="f"))
if((UserChoice==="g")) if((UserChoice==="h")) if((UserChoice==="j")) if((UserChoice==="k")) if((UserChoice==="l")) if((UserChoice==="z")) if((UserChoice==="x"))
if((UserChoice==="c")) if((UserChoice==="v")) if((UserChoice==="b")) if((UserChoice==="n")) if((UserChoice==="m")) 
var computerguess=ComputerChoice[Math.floor(Math.random() *ComputerChoice.length)];
UserChoicetext.textcontent="letter:"+ UserGuess;
