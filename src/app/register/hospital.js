"use client";

import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";

export default function Hospital() {
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [hospitalType, setHospitalType] = useState("");
  const [officialRegNo, setOfficialRegNo] = useState("");
  const [url, setUrl] = useState("");
  const [medicalLicenceNo, setMedicalLicenceNo] = useState("");
  const [officialPhoneNo, setOfficialPhoneNo] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const displayObject = {
    firstName: hospitalName,
    lastName: address,
    role: "admin",
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
          <p className="font-bold tracking-wider">Register as a Hospital</p>
          <button onClick={() => window.location.reload()} className="font-sm text-sm rounded-lg mt-2 p-1 bg-gray-400 bg-opacity-35 cursor-pointer text-gray-600">Go back</button>
      <div className="w-full bg-[#D9D9D9] bg-opacity-35 rounded-lg mt-6 lg:p-5">
        <div className="p-6 space-y-4 sm:p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div className="flex justify-between w-[100%]">
            <div className="w-[48%]">
              <label
                htmlFor="hospital_name"
                className="block mb-2 text-sm font-medium"
              >
                Hospital Name
              </label>
              <input
                type="text"
                name="hospital_name"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none w-full block p-2.5 md:p-3"
                placeholder="J&J"
                required
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 w-full focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block p-2.5 md:p-3"
                placeholder="NO: 11"
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
                id="email"
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block w-full p-2.5 md:p-3"
                placeholder="name@gamil.com"
                required
              />
            </div>
            <div className="flex justify-between w-[100%]">
            <div className="w-[48%]">
              <label
                htmlFor="hospital_type"
                className="block mb-2 text-sm font-medium"
              >
                Hospital Type
              </label>
              <input
                type="text"
                name="hospital_type"
                value={hospitalType}
                onChange={(e) => setHospitalType(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none w-full block p-2.5 md:p-3"
                placeholder="J&J"
                required
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor="officialRegNo"
                className="block mb-2 text-sm font-medium"
              >
                Official Reg Number
              </label>
              <input
                type="number"
                name="officialRegNo"
                value={officialRegNo}
                onChange={(e) => setOfficialRegNo(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 w-full focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block p-2.5 md:p-3"
                placeholder="1234567890"
                required
              />
            </div>
            </div>
            <div>
              <label
                htmlFor="url"
                className="block mb-2 text-sm font-medium"
              >
                Website URL
              </label>
              <input
                type="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="www.hospital.com"
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block w-full p-2.5 md:p-3"
                required
              />
            </div>
            <div className="flex justify-between w-[100%]">
            <div className="w-[48%]">
              <label
                htmlFor="medlic"
                className="block mb-2 text-sm font-medium"
              >
                Medical License NO
              </label>
              <input
                type="number"
                name="medlic"
                value={medicalLicenceNo}
                onChange={(e) => setMedicalLicenceNo(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none w-full block p-2.5 md:p-3"
                placeholder="1234567890"
                required
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium"
              >
                Official Phone Number
              </label>
              <input
                type="number"
                name="phone"
                value={officialPhoneNo}
                onChange={(e) => setOfficialPhoneNo(e.target.value)}
                className="bg-gray-50 border border-[#0059FD] text-[#0059FD] font-bold sm:text-sm rounded-lg focus:ring-primary-600 w-full focus:border-primary-600 focus:border-blue-900 focus:border-2 outline-none block p-2.5 md:p-3"
                placeholder="1234567890"
                required
              />
            </div>
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