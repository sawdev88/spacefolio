// Modified from surfmuggle stackoverflow reply
// https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page
smoothScroll = (eID) => {
    let startY = self.pageYOffset
    let stopY = eID;
    let distance = stopY > startY ? stopY - startY : startY - stopY;

    if (distance < 100) {
        scrollTo(0, stopY); return;
    }

    let speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    let step = Math.round(distance / 25);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;

    if (stopY > startY) {
        for (let i=startY; i<stopY; i+=step) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }

    for (let i=startY; i>stopY; i-=step) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }

  return false;
}

convertToPx = (item) => {
  return item + 'px';
}

// Parallax Landing Banner
window.addEventListener('scroll', function () {
  let cloudMarker = (window.pageYOffset / 4);
  let slideMarker = window.pageYOffset / 10;
  let opacityMarker = 1 - (window.pageYOffset / 500);

  // Landing Banner - Move clouds up
  if (cloudMarker < 188) {
    console.log(cloudMarker);
    document.querySelector('.clouds-layer').style.marginBottom = convertToPx(cloudMarker);
  }

  // Landing Banner - Fade out text
  if (opacityMarker > .1) {
    var opacityEls = document.querySelectorAll('.opacity-effect');
    [].forEach.call(opacityEls, function(els) {
      els.style.opacity = opacityMarker;
    })
  }

  if (slideMarker < 75) {
    document.querySelector('.skew').style.marginTop = convertToPx(slideMarker);
  }

  // About -  Move clouds
  if (slideMarker < 300) {
    document.querySelector('.cloud-layer').style.marginRight = convertToPx(slideMarker);
  }
})

// Smooth scroll to sections
document.querySelector('.nav ul').addEventListener('click', function(e) {
  let el = e.target.dataset.nav;
  smoothScroll(document.getElementById(el).offsetTop);
})

// Chuck Norris request :)
new function () {
  let requestURL = 'https://api.chucknorris.io/jokes/random';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    document.querySelector('.chuck-norris').innerHTML = (request.response.value)
  }
}();

// Toggle tooltip
document.querySelector('.smco').addEventListener('click', function () {
  this.nextElementSibling.classList.toggle('show');
})
