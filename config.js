import * as firbase from "firebase"
require("@firbase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyDjNsJQRBDzmZ2-siLpjyoRHU1C-lmq0-w",
    authDomain: "storywriting-d3a76.firebaseapp.com",
    projectId: "storywriting-d3a76",
    storageBucket: "storywriting-d3a76.appspot.com",
    messagingSenderId: "914462446814",
    appId: "1:914462446814:web:896e004967d6fbe62ede4f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore(); 
