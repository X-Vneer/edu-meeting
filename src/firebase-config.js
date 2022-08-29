import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYKdb-wl818LggOzx6ktHfKb2oMy_BA6M",
  authDomain: "edu-meeting.firebaseapp.com",
  projectId: "edu-meeting",
  storageBucket: "edu-meeting.appspot.com",
  messagingSenderId: "35772287046",
  appId: "1:35772287046:web:ae27ad000c7c1981b12247",
  measurementId: "G-MMKMPM6P2E",
};
initializeApp(firebaseConfig);

export const db = getFirestore();
