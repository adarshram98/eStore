import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDkeoYmJudmhEf7AnmHqt8TDBbnG-9wnLg",
    authDomain: "ecommercebackend-19e16.firebaseapp.com",
    databaseURL: "https://ecommercebackend-19e16.firebaseio.com",
    projectId: "ecommercebackend-19e16",
    storageBucket: "ecommercebackend-19e16.appspot.com",
    messagingSenderId: "572027761512",
    appId: "1:572027761512:web:f0babaab8c04627d1bdcdd"
  };
  // Initialize Firebase
  const fire =firebase.initializeApp(firebaseConfig);
  export default fire;