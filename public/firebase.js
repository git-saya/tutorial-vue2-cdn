// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBp_AuhggB4nv-tfr2S2hRGrNx4LOvlHdQ",
  authDomain: "tutorial-vuejs-29fb0.firebaseapp.com",
  databaseURL: "https://tutorial-vuejs-29fb0.firebaseio.com",
  projectId: "tutorial-vuejs-29fb0",
  storageBucket: "tutorial-vuejs-29fb0.appspot.com",
  messagingSenderId: "836670826876",
  appId: "1:836670826876:web:ade78a115326bbc6621cf9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database()
const kelasRef = database.ref('kelas')