import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.mjs";

const btn=document.getElementById("registerBtn");

btn.addEventListener('click',()=>{

    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;
    const country= document.getElementById('country').value;
    const age= document.getElementById('age').value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    alert("Sign up Succesful")
    window.location.href='./index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage , errorCode);
    alert("Something went Wrong while sign Up")
  });
});
    