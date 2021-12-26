import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk_WQKX2uf-alsg9R601Wf890HknJTYLQ",
  authDomain: "vue-firebase-blog-d5685.firebaseapp.com",
  projectId: "vue-firebase-blog-d5685",
  storageBucket: "vue-firebase-blog-d5685.appspot.com",
  messagingSenderId: "855226167190",
  appId: "1:855226167190:web:759d4ede403ec37249b7b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebaseApp.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
