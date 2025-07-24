"use client";
import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, use, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return use(AuthContext);
}

export default function AuthProvider (props) {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const router = useRouter();

  function signUp (email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  function signIn (email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  };
  function logOut (email, password) {
    setCurrentUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        console.log("Authenticating");
      setIsUserLoading(true);
      try {
        setCurrentUser(user);
        console.log(currentUser)
        if (!user) {
            throw Error("user not found");
        }
        console.log("User authenticated:", user.email);
        setCurrentUser(user);
        console.log(currentUser)
      } catch (error) {
        console.log("Error fetching user data:", error.message);
      } finally {
        setIsUserLoading(false);
      }
      console.log(user)
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isUserLoading,
    signUp,
    signIn,
    logOut,
  };

  return (
    <AuthContext value={value}>
    {children}
    </AuthContext>
    )
};

