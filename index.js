function beginToLazyLoad() {
  //since we only onload once go ahead and remove the listener
  window.onload = null;

  let images, imagesArr;

  //grabs all images and stores them in a nodes list
  images = document.getElementsByClassName('lazy');
  imagesArr = Array.from(images);

  function lazyLoad() {
    //iterates through the node list
    for (let i = 0; i < imagesArr.length; i++) {
      //checks if it is in view, in order to load
      if (isInViewport(imagesArr[i])) {
        imagesArr[i].src = imagesArr[i].getAttribute('data-src');
        imagesArr.splice(i, 1);
        console.log(imagesArr.length);
      }
    }
  }

  function isInViewport(element) {
    //The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    let rect = element.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= document.documentElement.clientHeight &&
      rect.left <= document.documentElement.clientWidth
    );
  }

  function debounce(func, wait, immediate) {
    let timeout;
    return function() {
      let context = this,
        args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  window.addEventListener('scroll', debounce(lazyLoad, 100));

  lazyLoad();
}

window.onload = beginToLazyLoad;
