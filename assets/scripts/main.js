var emailIcon = document.querySelector('.fa-envelope');
var emailContainer = document.querySelector('.email-container');
var closeEmailContainer = document.querySelector('.fa-close');

emailIcon.addEventListener('click', function () {
  emailContainer.classList.toggle('show-email');
})

closeEmailContainer.addEventListener('click', function () {
  emailContainer.classList.toggle('show-email');
})
