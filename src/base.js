import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCKQU2aGXc2sIeGzUnOklaZDUdN7qKJmgA",
    authDomain: "chatbox-6d0dd.firebaseapp.com",
    databaseURL: "https://chatbox-6d0dd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatbox-6d0dd",
    storageBucket: "chatbox-6d0dd.firebasestorage.app",
    messagingSenderId: "349105189588",
    appId: "1:349105189588:web:54524d13f13adb4195c141"
}

const firebaseApp = initializeApp(firebaseConfig)
const database = getDatabase(firebaseApp)

export default database