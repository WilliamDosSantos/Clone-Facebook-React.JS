import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkik0LsWIaMLjIhJJszgPL_3txTTT5Xd4",
  authDomain: "clonefb-6fb5a.firebaseapp.com",
  projectId: "clonefb-6fb5a",
  storageBucket: "clonefb-6fb5a.appspot.com",
  messagingSenderId: "1072968710281",
  appId: "1:1072968710281:web:dcb0234087c9fad60fae58",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();
const auth = app.auth();

export { auth, db, storage };

// export default firebase

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.App();

// const db = app.firestore();
// const storage = firebase.storage();
// const auth = app.auth();

// export { auth, db, storage };
