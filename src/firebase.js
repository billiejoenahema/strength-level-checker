import firebase from 'firebase'

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID
} = process.env

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()

export const addReport = ({ userName, bodyWeight, exercise, lift, reps, maxLift, strengthLevel }) => {
  const docId = db.collection("members").doc().id
  db.collection('report').doc(docId).set({
    userName: userName,
    bodyWeight: bodyWeight,
    exercise: exercise,
    lift: lift,
    reps: reps,
    maxLift: maxLift,
    strengthLevel: strengthLevel,
    created_at: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true })
}
export const reportRef = firebase.database().ref('report')
