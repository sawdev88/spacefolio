// Modified from surfmuggle stackoverflow reply
// https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page
function smoothScroll(eID) {
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
        for ( let i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }

    for ( let i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }

    return false;
}

// Parallax Landing Banner
window.addEventListener('scroll', function () {
  let pageLocation = -(window.pageYOffset / 4);
  let cloudScroll = pageLocation + 'px';
  if (pageLocation > -180) {
    document.querySelector('.clouds-layer').style.marginTop = cloudScroll;
  }
})

// Smooth scroll to sections
document.querySelector('.nav ul').addEventListener('click', function(e) {
  let el = e.target.dataset.nav;
  smoothScroll(document.getElementById(el).offsetTop);
})
