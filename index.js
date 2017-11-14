
() => {
  //grabs all images and stores them in a nodes list
  let images = document.getElementsByClassName('lazy');
  //iterates through the node list
  for(let i = 0; i < toBeLoaded.length; i++){
    //checks if it is in view, in order to load
    if(isInViewport(images[i])) {
      images[i].src = images[i].getAttribute('data-src');
  }
}
