'use client'

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  languge_code: string;
  is_premium?: boolean;

}

export default function Home() {
  const [UserData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user)  {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])

  return (
    <main className="flex items-center justify-center h-screen p-4">
      {
        UserData ?
        (
          <>
            <h1 className="text-xl font-bold mb-4 "> Your Data </h1>
            <div className="bg-gray-300 bg-opacity-50 backdrop-blur-md p-6 rounded-lg">
              <ul>
                <li className="font-bold text-black">ID: {UserData.id}</li>
                <li className="font-bold text-black">First Name: {UserData.first_name || "N/A"}</li>
                <li className="font-bold text-black">Last Name: {UserData.last_name || "N/A"}</li>
                <li className="font-bold text-black">Username: {UserData.username}</li>
                <li className="font-bold text-black">Language code: {UserData.languge_code || "N/A"}</li>
                <li className="font-bold text-black">is Premium: {UserData.is_premium ? 'Yes' : 'No'}</li>
              </ul>
            </div>
          </>
        ):
        (
          <div className="text-2xl font-bold">Loading...</div>
        )
      }
    </main>
  );
}
