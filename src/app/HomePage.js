"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useState, useEffect } from "react";
import Onboarding from "./(auth)/page";

export default function HomePage() {
  const router = useRouter();

  const [ user, setUser ] = useState('')
  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {

      setUser(user);
      if (user) {
        const displayObject = user && JSON.parse(user.displayName);
        setFirstName(displayObject.firstName)
      }
      // console.log(user)
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    await signOut(auth);

    // await fetch("/api/logout");

    router.push("/login");
  }

  return (
    user ?
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="mb-8">
        Only <strong>{firstName}</strong> holds the magic key to this page!
      </p>
      <button
        onClick={handleLogout}
        className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800"
      >
        Logout
      </button>
    </main> :
    <Onboarding />
  );
}