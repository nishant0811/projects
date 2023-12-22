function popToggle(){
  document.getElementById('pop__container').classList.toggle('active')
}

function pauseVideo(){
  document.getElementById('video').pause();

}


function featureVideo(id){
  document.getElementById('featurVideo'+id).classList.toggle('active')
}

function pauseFeatureVideo(id){
  document.getElementById('video'+id).pause();
}
