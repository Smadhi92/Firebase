// Initialize Firebase
var config = {
    apiKey: "AIzaSyAUqzzYaZBWJFUIXMtdQ5ey5xJtRyeDGtM",
    authDomain: "my-1st-firebase-project-d0cf3.firebaseapp.com",
    databaseURL: "https://my-1st-firebase-project-d0cf3.firebaseio.com",
    projectId: "my-1st-firebase-project-d0cf3",
    storageBucket: "my-1st-firebase-project-d0cf3.appspot.com",
    messagingSenderId: "321087012524"
  };
  firebase.initializeApp(config);

//References messages collection

var messagesRef = firebase.database().ref("messages");

//Listen for form submit

document.getElementById("contactForm").addEventListener("submit", submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

}
//Get values

var name = getInputVal("name");
var company = getInputVal("company");
var email = getInputVal("email");
var phone = getInputVal("phone");
var name = getInputVal("message");

// Save message
saveMessage(name, company, email, phone, message);

//show alert
document.querySelector('.alert').style.display = "block";

//Hide alert after 3 sec

setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
}, 3000);

//Fonction to get Form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase

function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name : name,
    company : company,
    email : email,
    phone : phone,
    message : message

    });
}