function login(){
  var usermail=document.getElementById("email").value;
  var userpassword=document.getElementById("password").value;
  



firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("ERROR :"  +errorMessage);
});

}



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("loggedindiv").style.display="block";
    document.getElementById("logindiv").style.display="none";

  
  } else {
    // No user is signed in.
    document.getElementById("logindiv").style.display="none";
    document.getElementById("loggedindiv").style.display="block";
  }
});