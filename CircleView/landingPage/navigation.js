function toggleNav(){
  let nav = document.getElementById('mobile__navigation');
  nav.classList.toggle('active');
  if(nav.classList.contains('active')){
    nav.style.maxHeight = nav.scrollHeight + "px";
  }
  else{
    nav.style.maxHeight = null;
  }
}


function showDropdown(){
  let nav = document.getElementById('dropdown');
  let navbar = document.getElementById('mobile__navigation');
  nav.classList.toggle('active');
  if(nav.classList.contains('active')){
    nav.style.maxHeight = nav.scrollHeight + "px";
  }
  else{
    nav.style.maxHeight = null;
  }
  navbar.style.maxHeight = (navbar.scrollHeight + nav.scrollHeight) + "px"  ;
}
