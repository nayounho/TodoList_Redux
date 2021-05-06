import firebase from 'firebase/app';
import 'firebase/firestore';
import { todosCollectionRef } from './firebase';

const firestore = firebase.firestore();

// 받아올 때

// 개별 doc 받아오기
const getDoc = async () => {
  const snapshot = await todosCollectionRef.doc('doc의 아이디값(현재 예시에서는 랜덤)').get();

  // 우리가 읽을 수 있는 객체 형태로 변환
  snapshot.data();

  // 그 스냅샷이 있는지 여부
  snapshot.exists;
};

// 컬렉션의 전체 doc 받아오기
const getAllCollection = async () => {
  const snapshot = await todosCollectionRef.get();

  // 배열로 읽기
  snapshot.docs; // 얘네는 아직 .data() 를 안해서 읽을 수 없음
  snapshot.docs.map(todo => todo.data());

  // 배열(doc)의 개수
  snapshot.size;
};

// 올릴 때

const setTodo = async () => {
  todosCollectionRef.doc('doc의 아이디').set('올릴 자료(우리 상황에서는 투두 객체)');
};

// 후속 처리
// { hostName: 'blabla', salonInfo: 'blalba', thumbnail: 'https://~', }

const getInfo = async () => {
  const salonInfoCollRef = firestore.collection('salonInfo');

  const snapshot = await salonInfoCollRef.get();
  const salonInfo = snapshot.docs.map(info => info.data());
  return salonInfo;

  // const salonInfoCollRef = firestore.collection('salonInfo')

  // salonInfoCollRef.get().then(snapshot => snapshot.docs.map(info => info.data()));
};

// 썽크

const thunk = () => async dispatch => {
  const salonInfo = await getInfo;
  dispatch(salonInfoAction(salonInfo));
};

dispatch(thunk());
