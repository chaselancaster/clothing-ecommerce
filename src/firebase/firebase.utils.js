import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDUSqqXilKNGnsg-OCVlW4nnT-ySF3O6J0",
    authDomain: "ecommerce-39692.firebaseapp.com",
    databaseURL: "https://ecommerce-39692.firebaseio.com",
    projectId: "ecommerce-39692",
    storageBucket: "ecommerce-39692.appspot.com",
    messagingSenderId: "833025485378",
    appId: "1:833025485378:web:2e7cd8346276ce1a00dbdb",
    measurementId: "G-E3MS2QTQWD"
  };

  firebase.initializeApp(config);