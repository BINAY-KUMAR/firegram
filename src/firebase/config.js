import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwFfSyow3o3wkCwwuttbnUDRsXsPCdwEA",
    authDomain: "firegram-bf6c0.firebaseapp.com",
    databaseURL: "https://firegram-bf6c0.firebaseio.com",
    projectId: "firegram-bf6c0",
    storageBucket: "firegram-bf6c0.appspot.com",
    messagingSenderId: "626644683401",
    appId: "1:626644683401:web:01845db6f69e397974d458"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timeStamp };