function curtainClick(elem){
  elem.style.transform="translateY(-100%)";
  elem.style.transition=" all 1.5s" 
}

function light(elem){
  elem2=document.querySelector(".light");
  elem3=document.querySelector(".performance");
  if(elem2.style.visibility == "visible" ){
    elem2.style.visibility = "hidden";
    elem3.style.visibility = "hidden";
  }
  else{
    elem2.style.visibility = "visible";
    elem3.style.visibility = "visible";
  }
 
  
}

function animalClick(elem){
  elem.style.transform="translateY(100px)";
  elem.style.transition=" transform 0.5s";
  let elem2 = document.querySelector(".bunny") ;
  setTimeout(() => {
    if(elem2){
      elem.classList.remove("bunny");
      elem.classList.add("bird");
    }
    else{
      elem.classList.remove("bird");
      elem.classList.add("bunny");
    }
    }, 500);
 
  setTimeout(() => {
  elem.style.transform="translateY(-0px)";
  elem.style.transition="transform 0.5s";
  }, 500);
  
}

