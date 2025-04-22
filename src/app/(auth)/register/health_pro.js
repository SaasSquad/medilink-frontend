"use client";

import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useRouter } from "next/navigation";

export default function HealthPro() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [license, setLicense] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const displayObject = {
    firstName: firstName,
    lastName: lastName,
    profession: profession,
    specialization: specialization,
    license: license,
    yearsExperience: yearsExperience,
    role: "health_pro",
  };

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: JSON.stringify(displayObject) });
      router.push("/login");
    } catch (e) {
      setError((e).message);
    }
  }

  return (
    <main className="flex min-h-screen text-[#0059FD] flex-col items-center justify-center py-8 px-4 md:px-48 lg:px-72">
      <h1 className="text-[40px] font-bold leading-tight tracking-tight">
            MediLink
          </h1>
          <p className="font-bold tracking-wider">Register as a Health Professional</p>
          <button onClick={() => window.location.reload()} className="font-sm text-sm rounded-lg mt-2 p-1 bg-gray-400 bg-opacity-35 cursor-pointer text-gray-600">Go back</button>
      <div className="w-full bg-[#D9D9D9] bg-opacity-35 rounded-lg mt-4 lg:p-5">
        <div className="p-6 space-y-4 sm:p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div className="flex justify-between w-[100%]">
            <div className="w-[48%]">
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none w-full block p-2.5 md:p-3"
                placeholder="Joe"
                required
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor="Last Name"
                className="block mb-2 text-sm font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 w-full focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block p-2.5 md:p-3"
                placeholder="Doe"
                required
              />
            </div>
            </div>
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
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block w-full p-2.5 md:p-3"
                placeholder="name@gamil.com"
                required
              />
            </div>
            <div className="flex justify-between w-[100%]">
            <div className="w-[48%]">
              <label
                htmlFor="profession"
                className="block mb-2 text-sm font-medium"
              >
                Professional Title
              </label>
              <input
                type="text"
                name="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none w-full block p-2.5 md:p-3"
                placeholder="Doctor"
                required
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor="specialization"
                className="block mb-2 text-sm font-medium"
              >
                Specialization
              </label>
              <input
                type="text"
                name="specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 w-full focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block p-2.5 md:p-3"
                placeholder="Dentist"
                required
              />
            </div>
            </div>
            <div className="flex justify-between w-[100%] items-center">
            <div className="w-[48%]">
              <label
                htmlFor="license"
                className="block mb-2 text-sm font-medium"
              >
                License/Reg Number
              </label>
              <input
                type="text"
                name="license"
                value={license}
                onChange={(e) => setLicense(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none w-full block p-2.5 md:p-3"
                placeholder="1234567890"
                required
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor="yearsExperience"
                className="block mb-2 text-sm font-medium"
              >
                Years of Experience
              </label>
              <input
                type="text"
                name="yearsExperience"
                value={yearsExperience}
                onChange={(e) => setYearsExperience(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 w-full focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block p-2.5 md:p-3"
                placeholder="5"
                required
              />
            </div>
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
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block w-full p-2.5 md:p-3"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium"
              >
                Confirm Password
              </label>
              <input
                type="text"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setComfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block w-full p-2.5 md:p-3"
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
              className="w-full bg-[#0059FD] text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 md:py-3 text-center"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-gray-600 hover:underline dark:text-gray-500"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}