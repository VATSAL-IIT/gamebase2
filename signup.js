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
      
     function signUp(){
      
          var email=document.getElementById('email').value;
          var password=document.getElementById('password').value;
          var name=document.getElementById('name').value;
          var username=document.getElementById('username').value;
        
         firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
window.alert('You Have Registered Successfully')
var id=firebase.auth().currentUser.uid;
firebase.database().ref('USER/'+id).set({
  Name:name,
  Username:username,
  Email:email
  
});

         }).catch(function(error){
var errorcode=error.code;
var errormsg=error.message;
         })
        }
        function signin(){

        window.location.href="signin.html";
        }