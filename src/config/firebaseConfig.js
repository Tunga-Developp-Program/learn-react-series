import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz-5GVhPra028Wk5bjchOOnepTbJWDMI0",
  authDomain: "super-duper-blog-app-40579.firebaseapp.com",
  databaseURL: "https://super-duper-blog-app-40579.firebaseio.com",
  projectId: "super-duper-blog-app-40579",
  storageBucket: "super-duper-blog-app-40579.appspot.com",
  messagingSenderId: "396676963098",
  appId: "1:396676963098:web:cc92f527ed6e87297a2aa3",
};

firebase.initializeApp(firebaseConfig);

// firebase ui ...
export const uiConfig = {
  
  signInFlow: "popup",

  signInSuccessUrl: "/",

  // Three button : facebook , google and email
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

// export the db(firestore)

export const db = firebase.firestore()

export default firebase;
