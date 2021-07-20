import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
    id: string;
    name: string;
    avatar: string;
};
  
type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
    children: ReactNode
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                const { displayName, photoURL, uid } = user;
                setUser({
                    id: uid,
                    name: displayName || "Usuário",
                    avatar: photoURL || 'https://i.ibb.co/MBKsMWP/Vector.png'
                });
            }
          });
      
          return () => {
            unsubscribe();
          }
    }, [])

    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider).then(result => {
            if(result.user) {
                const { displayName, photoURL, uid } = result.user;
                setUser({
                    id: uid,
                    name: displayName || "Usuário",
                    avatar: photoURL || 'https://i.ibb.co/MBKsMWP/Vector.png'
                });
            }
        }).catch(error => {

        });
    }

    async function signOut() {
        await auth.signOut();
        setUser(undefined);
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
            {props.children}
        </AuthContext.Provider>
    )
}