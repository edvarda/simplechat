import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQ5bjvbNhHZbLQo_xzN39GA3e4RCo9v44",
  authDomain: "simplechat-d953c.firebaseapp.com",
  databaseURL: "https://simplechat-d953c.firebaseio.com",
  projectId: "simplechat-d953c",
  storageBucket: "",
  messagingSenderId: "435075336700"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
   prompt: 'select_account'
});
export const database = firebase.database().ref('messages/');
