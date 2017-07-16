var cloudsLayer = document.querySelector('.clouds-layer');

window.addEventListener('scroll', function () {
  let pageLocation = -(window.pageYOffset / 4);
  let cloudScroll = pageLocation + 'px';
  if (pageLocation > -180) {
    cloudsLayer.style.marginTop = cloudScroll;
  }
})
