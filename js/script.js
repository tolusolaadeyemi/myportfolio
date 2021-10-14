const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'),
  navLinks = document.querySelectorAll('.nav-link'),
  sections = document.querySelectorAll('section'),
  header = document.querySelector('header'),
  form = document.querySelector('form'),
  loader = document.querySelector('.loader'),
  uname = document.querySelector('#uname'),
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

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD8XQysT6yUe89rEpgOAb348UYUtmPnzJ0",
    authDomain: "contact-form-37888.firebaseapp.com",
    databaseURL:"contact-form-37888-default-rtdb.firebaseio.com",
    projectId: "contact-form-37888",
    storageBucket: "contact-form-37888.appspot.com",
    messagingSenderId: "269342994798",
    appId: "1:269342994798:web:8c284845cb279d5030917f",
    measurementId: "G-08NZQG9GJ5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var messagesRef = firebase.database().ref('messages');
//initialize firebase database 

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

//save messages to firebase
const saveMessage = () => {
  let newMessageRef = messagesRef.push();
   newMessageRef.set({
     uname: uname.value,
     email: email.value,
     subject: subject.value,
     message: message.value,
   });
};


function validateEmail(emailValid) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailValidTest = re.test(String(emailValid).toLowerCase());
  if (emailValidTest === true) {
    saveMessage();
    showError('');
    //show alert
    document.querySelector('.myalert').style.display='block';
    //hide alert after 3secs
    setTimeout(function(){
      document.querySelector('.myalert').style.display='none';
    },3000);
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
