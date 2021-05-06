import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDZAUgLukxC6_HNJ9T8N8R3ScVn0sYKI7A',
  authDomain: 'todolist-redux-593fa.firebaseapp.com',
  projectId: 'todolist-redux-593fa',
  storageBucket: 'todolist-redux-593fa.appspot.com',
  messagingSenderId: '817898251480',
  appId: '1:817898251480:web:0921ed44bebca8b97c63ad'
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const todosCollectionRef = firestore.collection('todos');

export { todosCollectionRef };
