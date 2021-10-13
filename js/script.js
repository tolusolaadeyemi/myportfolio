const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'),
  navLinks = document.querySelectorAll('.nav-link'),
  sections = document.querySelectorAll('section'),
  header = document.querySelector('header'),
  form = document.querySelector('form'),
  loader = document.querySelector('.loader'),
  name = document.querySelector('#name'),
  email = document.querySelector('#email'),
  subject = document.querySelector('#subject'),
  message = document.querySelector('#message'),
  containAll = document.querySelector('.contain-all'),
  navigationCheckbox = document.querySelector('.navigation-checkbox'),
  aboutCards = document.querySelectorAll('.about-page-card'),
  certificateShow = document.querySelector('.certificate-img-contain'),
  certificateShowImg = document.querySelector('.certificate-img'),
  viewCertificate = document.querySelector('.view-certificate'),
  certificateBtns = document.querySelectorAll('.certificate-btn');


const resizeHeight = () => {
  aboutCards.forEach(aboutCard => {
    aboutCard.style.height = getComputedStyle(aboutCard).width;
  });
}
resizeHeight();
window.onresize = function() {
          aboutCards.forEach(aboutCard => {
            aboutCard.style.height = getComputedStyle(aboutCard).width;
          });
}

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  // let elId = el.id;
  // console.log(rect.top);
  // console.log(rect.bottom);
  // console.log(elId);
  if (
    // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <= 100
    // rect.top <= document.documentElement.scrollTop || document.body.scrollTop

  ) {
    navLinks.forEach((navLink) => {
      navLink.classList.contains(el.id) ? navLink.classList.add('active') : navLink.classList.remove('active');
    })
  }
}
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navigationCheckbox.checked = false;   
  })
})

document.addEventListener('scroll', () => {
  sections.forEach((section) => {
    isInViewport(section);
  })
});

// Show error message
const showError = (message) => {
  const formGroup = email.parentElement.closest('.input-wrap');
  formGroup.querySelector('small').innerText = message;
};

function validateEmail(emailValid) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailValidTest = re.test(String(emailValid).toLowerCase());
  if (emailValidTest === true) {
    showError('');
  email.style.marginBottom = "12px";
  form.querySelectorAll('input').forEach(inputTag => {
    inputTag.value = '';
  });
  form.querySelector('textarea').value = '';
} else {
  showError('Email invalid');
  email.style.marginBottom = "0px";
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (email.value !== '') {
    validateEmail(email.value);
  }
});

document.querySelector("form").addEventListener("submit", handleSubmit);
const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('contact');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}