import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAliMUhvviuLZaurNZg7wO487tPIbj68wY",
  authDomain: "plated-client-342808.firebaseapp.com",
  databaseURL: "https://plated-client-342808-default-rtdb.firebaseio.com",
  projectId: "plated-client-342808",
  storageBucket: "plated-client-342808.appspot.com",
  messagingSenderId: "640749888274",
  appId: "1:640749888274:web:94e098da0a884e9f4f89cb"
};


    
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();