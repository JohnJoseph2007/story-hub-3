import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBI-VjDckPBnjIvKvo8ct96QJqaqeiQ0po",
  authDomain: "storyhub-d1558.firebaseapp.com",
  databaseURL: "https://storyhub-d1558-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "storyhub-d1558",
  storageBucket: "storyhub-d1558.appspot.com",
  messagingSenderId: "125030575276",
  appId: "1:125030575276:web:6fe238b2a43fd82d794309",
  measurementId: "G-QRN4M9J8Q0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()