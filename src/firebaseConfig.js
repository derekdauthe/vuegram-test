import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
	apiKey: 'AIzaSyCEGt-s2qy3TLPZZgZ8gOjg6VHt1rycuF0',
    authDomain: 'firestore-test-5449f.firebaseapp.com',
    databaseURL: 'https://firestore-test-5449f.firebaseio.com',
    projectId: 'firestore-test-5449f',
    storageBucket: 'firestore-test-5449f.appspot.com',
    messagingSenderId: '12803187295'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
