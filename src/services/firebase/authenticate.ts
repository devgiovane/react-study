import { getAuth, createUserWithEmailAndPassword, User } from "firebase/auth";

import { firebase } from '~@Services/firebase';

export async function loginWith(email: string, password: string): Promise<User> {
    try {
        const auth = getAuth(firebase);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}
