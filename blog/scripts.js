function modifyStyle(evt){

  let buttonEvent = evt.target
  let textTarget = buttonEvent.parentNode

   if (textTarget.querySelector(".Title").style.webkitLineClamp == "5" || textTarget.querySelector(".Title").style.webkitLineClamp == ""){ 
      buttonEvent.innerText = "Less"
      textTarget.querySelector(".Title").style.webkitLineClamp = "initial"
   }

   else {
      buttonEvent.innerText = "More"
      textTarget.querySelector(".Title").style.webkitLineClamp = "5"
   }
   
}


function initialize(){
   testButton02 = document.querySelectorAll(".textButton").forEach(a => a.addEventListener("click", modifyStyle))
}


window.addEventListener("load", initialize)

