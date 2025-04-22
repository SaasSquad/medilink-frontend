"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Patient from "./patient";
import HealthPro from "./health_pro";
import Hospital from "./hospital";

export default function Register() {
    const [accountType, setAccountType] = useState('');
    const router = useRouter();

    const handleAccountTypeChange = (value) => {
        setAccountType(value); // Update account type
        router.push("/register")
      };

  return (
    !accountType ? 
    <main className="flex min-h-screen text-[#0059FD] flex-col items-center justify-center p-8">
      <h1 className="text-[40px] font-bold leading-tight tracking-tight">
            MediLink
          </h1>
      <div className="w-full bg-[#D9D9D9] bg-opacity-35 rounded-lg shadow dark:border sm:max-w-md xl:p-0 mt-4">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <button
              onClick={() => handleAccountTypeChange("patient")}
              className="w-full text-white bg-[#0059FD] hover:bg-blue-900 focus:ring-4 font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 md:py-3 text-center"
            >
              Patient
            </button>
            <button
              onClick={() => handleAccountTypeChange("hospital")}
              className="w-full bg-[#0059FD] text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 md:py-3 text-center"
            >
              Hospital
            </button>
            <button
              onClick={() => handleAccountTypeChange("health_pro")}
              className="w-full bg-[#0059FD] text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 md:py-3 text-center"
            >
              Health Pro
            </button>
        </div>
      </div>
    </main> :
    (accountType === 'patient' ?
    <Patient /> :
    accountType === 'hospital' ?
    <Hospital /> :
    accountType === 'health_pro' &&
    <HealthPro />)
  );
}