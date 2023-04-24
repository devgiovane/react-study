import { initializeApp } from "firebase/app";

const firebaseConfig = {
    appId: process.env.FIREBASE_APP_ID,
    apiKey: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
};

export const firebase = initializeApp(firebaseConfig);
