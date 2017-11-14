let images, imagesArr;
function setUp() {
  //grabs all images and stores them in a nodes list
  images = document.getElementsByClassName('lazy');
  imagesArr = Array.from(images);
  lazyLoad()
}

function lazyLoad() {
  //iterates through the node list
  for(let i = 0; i < imagesArr.length; i++){
    //checks if it is in view, in order to load
    if( isInViewport(imagesArr[i]) ) {
      imagesArr[i].src = imagesArr[i].getAttribute('data-src');
      imagesArr.splice(i, 1);
      console.log(imagesArr.length);
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

window.onload = setUp;

window.addEventListener('scroll', lazyLoad);
