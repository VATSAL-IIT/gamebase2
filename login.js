var firebaseConfig = {
  apiKey: "AIzaSyDYS8ak9vihpzOGPvozqYY1hZ139ISC1AA",
  authDomain: "beta-gamer-pro.firebaseapp.com",
  projectId: "beta-gamer-pro",
  storageBucket: "beta-gamer-pro.appspot.com",
  messagingSenderId: "394448356092",
  appId: "1:394448356092:web:6a7505cfe148c36b28cd79",
  measurementId: "G-CNV975Z7LC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




function login(){
  var usermail=document.getElementById("email").value;
  var userpassword=document.getElementById("password").value;
  



firebase.auth().signInWithEmailAndPassword(usermail, userpassword).catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("ERROR :"  +errorMessage);
});

}



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user);
    document.getElementById("loggedindiv").style.display="block";
    document.getElementById("logindiv").style.display="none";

  
  } else {
    // No user is signed in.
    // document.getElementById("logindiv").style.display="none";
    // document.getElementById("loggedindiv").style.display="block";
  }
});