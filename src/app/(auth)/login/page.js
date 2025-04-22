"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      const credential = await signInWithEmailAndPassword(
        getAuth(app),
        email,
        password
      );
      // const idToken = await credential.user.getIdTokenResult();

      // await fetch("/api/login", {
      //   method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${idToken.token}`,
      //   },
      // });

      router.push("/");
    } catch (e) {
      setError((e).message);
    }
  }

  return (
    <main className="flex min-h-screen text-[#0059FD] flex-col items-center justify-center p-8">
      <h1 className="text-[40px] font-bold leading-tight tracking-tight">
            MediLink
          </h1>
      <div className="w-full bg-[#D9D9D9] bg-opacity-35 rounded-lg shadow dark:border sm:max-w-md xl:p-0 mt-4">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <button
              type="submit"
              className="w-full text-white bg-[#0059FD] hover:bg-blue-900 focus:ring-4 font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 md:py-3 text-center"
            >
              Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-gray-600 hover:underline dark:text-gray-500"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}