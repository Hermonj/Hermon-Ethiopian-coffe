var firebaseConfig = {
    apiKey: "AIzaSyCHexXQJn2v_0HfUH64LEzYxCh33rZibVI",
    authDomain: "registertohermoncoffe.firebaseapp.com",
    databaseURL: "https://registertohermoncoffe.firebaseio.com",
    projectId: "registertohermoncoffe",
    storageBucket: "registertohermoncoffe.appspot.com",
    messagingSenderId: "847216161531",
    appId: "1:847216161531:web:cd73500c93a482d317f65e",
    measurementId: "G-KFJ4WE7EJ3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registertohermoncoffe')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let bio = document.querySelector('#bio').value;
  let job = document.querySelector('#job').value;
  let interest = document.querySelector('#interest').value;

  //send message values
  sendMessage(name, email, password, bio, job, interest);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registertohermoncoffe').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, password, bio, job, interest) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest
  });
}