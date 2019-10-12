import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDqsjuoI4hRJRuowcZ1BTks8l--n6JW6HQ",
  authDomain: "micro-dynamo-255612.firebaseapp.com",
  databaseURL: "https://micro-dynamo-255612.firebaseio.com",
  projectId: "micro-dynamo-255612",
  storageBucket: "micro-dynamo-255612.appspot.com",
  messagingSenderId: "489910354865",
  appId: "1:489910354865:web:7d778d239a94ab4e967390"
}

firebase.initializeApp(config)

// Create auth and firestore instances
export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Set up a Google sign in provider
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider)

export default firebase
