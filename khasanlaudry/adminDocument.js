function showSets(){

  document.getElementById("arrow2").classList.toggle('active');
  let drop = document.getElementById("sets");
  let drop2 = document.getElementById("indiSet")
  if(drop.style.maxHeight){
    drop.style.maxHeight = null;
  }
  else {
    drop.style.maxHeight = drop.scrollHeight+drop2.scrollHeight+5 + "px";
  }
}


function openSets(){
  document.getElementById("arrow3").classList.toggle('active');
  let drop = document.getElementById("indiSet")
  if(drop.style.maxHeight){
    drop.style.maxHeight = null;
  }
  else {
    drop.style.maxHeight = drop.scrollHeight+5 + "px";
  }
}
