import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCyv4kh7df6UT9hOhnhVVtXwtYgUQem48c",
  authDomain: "twentysofttracking.firebaseapp.com",
  databaseURL: "https://twentysofttracking.firebaseio.com",
  projectId: "twentysofttracking",
  storageBucket: "twentysofttracking.appspot.com",
  messagingSenderId: "120982829765",
  appId: "1:120982829765:web:cade4b6e7f796e5043ceac",
  measurementId: "G-MSWDCKPQJ2",
});

export default app;
