//---------------------------------------------------
// replace the lines below with your own "firebaseConfig"
// key value pairs
//--------------------------------------------------- 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUtm5iJn9qEtePsfh4joJNRWB5SLDXYNQ",
    authDomain: "gift-pick.firebaseapp.com",
    projectId: "gift-pick",
    storageBucket: "gift-pick.appspot.com",
    messagingSenderId: "860874098225",
    appId: "1:860874098225:web:e97861ed96464b1598b710"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();