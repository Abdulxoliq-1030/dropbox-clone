import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCpffc4ptcNBHymfxIaueTsqwindKnaPV0",
    authDomain: "dropbox-clone-d99b2.firebaseapp.com",
    projectId: "dropbox-clone-d99b2",
    storageBucket: "dropbox-clone-d99b2.appspot.com",
    messagingSenderId: "454135075274",
    appId: "1:454135075274:web:b8b59f0cb5eac45f33bf33"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app)

export { db, storage }