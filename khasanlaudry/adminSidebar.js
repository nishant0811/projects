function showDrop(){

  document.getElementById("arrow").classList.toggle('active');
  let drop = document.getElementById("drop")
  if(drop.style.maxHeight){
    drop.style.maxHeight = null;
    drop.style.margin = "-2px;";
    drop.style.padding ="0";
  }
  else {
    drop.style.maxHeight = drop.scrollHeight+5 + "px";
      drop.style.margin = "8px";
      drop.style.padding = "16px";
  }
}
