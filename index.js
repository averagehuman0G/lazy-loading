
function lazyLoad() {
  //grabs all images and stores them in a nodes list
  let images = document.getElementsByClassName('lazy');
  
  //iterates through the node list
  for(let i = 0; i < images.length; i++){
    //checks if it is in view, in order to load
    if(isInViewport(images[i])) {
      images[i].src = images[i].getAttribute('data-src');
    }
  }
}



function isInViewport(element){
  //The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
  let rect = element.getBoundingClientRect();
  return (
      rect.bottom >= 0 && rect.right >= 0 &&
      rect.top <= document.documentElement.clientHeight &&
      rect.left <= document.documentElement.clientWidth
   );
}

window.onload = lazyLoad;
