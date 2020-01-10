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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.id}`);

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;