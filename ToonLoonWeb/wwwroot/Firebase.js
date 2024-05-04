import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    deleteDoc,
    doc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Firebase configuration details
// replace this configuration with your own configuration details
const firebaseConfig = {
    apiKey: "AIzaSyAAa7tuH-sfURwWVRkS6iw8T-asb0g8rg0",
    authDomain: "toonloon-cbfce.firebaseapp.com",
    databaseURL: "https://toonloon-cbfce-default-rtdb.firebaseio.com",
    projectId: "toonloon-cbfce",
    storageBucket: "toonloon-cbfce.appspot.com",
    messagingSenderId: "1048209868140",
    appId: "1:1048209868140:web:fd31386fac40d85b831f49",
    measurementId: "G-GHF258D7GG"
};

// Initialize Firebase with the configuration details
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Define a function to add a new user to the Firestore database
// window.addUser = async (user) => {
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//             name: user,
//         });
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// };

// Define a function to get all the users from the Firestore database
window.getToons = async () => {
    const querySnapshot = await getDocs(collection(db, "Toon"));
    let dataArray = querySnapshot.docs.map((doc) => ({
        MangaID: doc.id,
        MangaTitle: doc.get("MangaTitle"),
        CoverURL: doc.get("CoverURL"),
        Author: doc.get("Author"),
        MangaDescription: doc.get("MangaDescription")
    }));

    console.log(dataArray);
    return dataArray;
};

window.getToonData = async (id) => {
    const docRef = doc(collection(db, "Toon"), id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
        const data = {
            MangaID: docSnapshot.id, // Corrected line
            MangaTitle: docSnapshot.get("MangaTitle"),
            CoverURL: docSnapshot.get("CoverURL"),
            Author: docSnapshot.get("Author"),
            MangaDescription: docSnapshot.get("MangaDescription")
        };

        console.log(data);
        return data;
    } else {
        console.log("Document does not exist");
        return null;
    }
};

const data = await window.getToonData("4qV0X7SPKysiYRA9O0Uu");
console.log(data);