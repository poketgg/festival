import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import dotenv from "dotenv";


const {
	VITE_FIREBASE_API_KEY,
	VITE_FIREBASE_AUTH_DOMAIN,
	VITE_FIREBASE_PROJECT_ID,
	VITE_FIREBASE_STORAGE_BUCKET,
	VITE_FIREBASE_MESSAGING_SENDER_ID,
	VITE_FIREBASE_APP_ID,
	VITE_FIREBASE_MEASUREMENT_ID,
} = import.meta.env

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
  measurementId: VITE_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, db};