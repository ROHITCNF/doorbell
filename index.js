
document.getElementById("bell").addEventListener("click",function(){
  var random= Math.floor((Math.random()*6)+1 ) ;


  var audio = new Audio("temple-bell-543.mp3");
  audio.play();

  if(random%2==0){
  document.getElementById("topH1").innerHTML="Door is open as we get random nember even : "+random;
  document.getElementById("door").setAttribute("src","images/open.jpg");
  }
  else if(random%2!=0){
  document.getElementById("topH1").innerHTML="Door is closed as we get random nember odd : "+random;
  document.getElementById("door").setAttribute("src","images/closed.jpg");
  }
});
