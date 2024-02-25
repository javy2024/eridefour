import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyATU9UQWlJMQQRT7Sti-I355ZGvQWSA9iM",
    authDomain: "complaint-forum-7dbeb.firebaseapp.com",
    projectId: "complaint-forum-7dbeb",
    storageBucket: "complaint-forum-7dbeb.appspot.com",
    messagingSenderId: "854639086119",
    appId: "1:854639086119:web:72cc29ec51eadfc62c5c02"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


