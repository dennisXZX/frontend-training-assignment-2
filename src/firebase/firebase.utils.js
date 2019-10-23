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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Check whether user is trying to log in
  // If the user is logging out, userAuth would be 'null'
  if (!userAuth) {
    return
  }

  // Get back a documentRef
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  // Get back a snapshot object containing all the data
  const queryDocumentSnapshot = await userRef.get()

  // If the user doesn't exist, create a new one and store it in Firebase database
  if (!queryDocumentSnapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

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

  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()

  objectsToAdd.forEach(object => {
    // Generate a new document object with a random id key
    const newDocRef = collectionRef.doc()

    // Batch all document creations in the collection
    batch.set(newDocRef, object)
  })

  return await batch.commit()
}

export default firebase
