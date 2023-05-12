(function () {
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyA5eLt1CkbxdKwN50Vhwtf1PnFiC1DL4cg",
        authDomain: "smart-paratext-382305.firebaseapp.com",
        projectId: "smart-paratext-382305",
        storageBucket: "smart-paratext-382305.appspot.com",
        messagingSenderId: "131634087515",
        appId: "1:131634087515:web:e508eaef97c90604d1a17e",
        measurementId: "G-Y2NYFPD6JX"
      };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
            location.href="mail.html"
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful : now please login)")
            location.href="index.html"
        }).catch(err => {
            alert(err.message);
        });

    });


}());
