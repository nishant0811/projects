const passwordToggle = document.getElementById('passwordToggle');
const passwordForm = document.getElementById('passwordForm');
const arrow = document.getElementById('arrow');
const deleteButton = document.querySelectorAll('.btn-front');
const confirmWindow = document.querySelectorAll('.btn-back');
const buttonYes = document.querySelectorAll('.buttonYes');
const buttonNo = document.querySelectorAll('.buttonNo');


function showDrop(){

  arrow.classList.toggle('active');
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

// show and hide password eye icon
function showPassword() {
  const type = passwordForm.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordForm.setAttribute('type', type);
  passwordToggle.classList.toggle('fa-eye-slash');
};

// passwordToggle.addEventListener('click', showPassword);


function openWindow(e){
  e.classList.add('hidden');
  confirmWindow.classList.remove('hidden');
  // console.log('testst');
};

deleteButton.forEach(el => {
  el.addEventListener('click', openWindow(el));
});
