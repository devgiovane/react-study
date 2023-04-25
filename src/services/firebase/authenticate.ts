import {
    getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,
    User, GoogleAuthProvider
} from "firebase/auth";

import { firebase } from '~@Services/firebase';

export interface UserType extends User { }

export async function loginWith(email: string, password: string): Promise<UserType> {
    try {
        const auth = getAuth(firebase);
        const credential = await signInWithEmailAndPassword(auth, email, password);
        return credential.user;
    } catch (error) {
        throw error;
    }
}

export async function loginWithGoogle(): Promise<UserType> {
    try {
        const auth = getAuth(firebase);
        const provider = new GoogleAuthProvider();
        const credential = await signInWithPopup(auth, provider);
        return credential.user;
    } catch (error) {
        throw error;
    }
}

export async function createUserWith(email: string, password: string): Promise<UserType> {
    try {
        const auth = getAuth(firebase);
        const created = await createUserWithEmailAndPassword(auth, email, password);
        return created.user;
    } catch (error) {
        throw error;
    }
}

export async function logout(): Promise<void> {
    try {
        const auth = getAuth(firebase);
        await signOut(auth);
    } catch (error) {
        throw error;
    }
}
