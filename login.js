import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.mjs";
const signin =document.getElementById('logInBtn')
signin.addEventListener('click', ()=>{
    const email= document.getElementById('email').value
    const password= document.getElementById('password').value


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("login Succesful")
    window.location.href='./dashboard.html'

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Something went Wrong")
  });
});