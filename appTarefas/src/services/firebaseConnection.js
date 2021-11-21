import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDsSpybanSUXxTOwXPMGLIsxZWiA2IE2M0",
  authDomain: "tarefas-4cda7.firebaseapp.com",
  projectId: "tarefas-4cda7",
  storageBucket: "tarefas-4cda7.appspot.com",
  messagingSenderId: "105869208767",
  appId: "1:105869208767:web:f98b9c22320f0931b9ea0a"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;