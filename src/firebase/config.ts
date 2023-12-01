// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBv_KSDljuCd98HztzdVu4c1qn4HLrYQRQ',
  authDomain: 'travelsocial-2d302.firebaseapp.com',
  projectId: 'travelsocial-2d302',
  storageBucket: 'travelsocial-2d302.appspot.com',
  messagingSenderId: '802922739045',
  appId: '1:802922739045:web:b0aabca26769ea81bb5d8c',
  measurementId: 'G-8LDF3VZC7F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
export { auth, providerFacebook, providerGoogle };

