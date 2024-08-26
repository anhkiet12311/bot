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
            <h1 className="text-2xl font-bold mb-4">User Data </h1>
            <ul>
              <li>ID: {UserData.id}</li>
              <li>First Name: {UserData.first_name}</li>
              <li>Last Nam: {UserData.last_name}</li>
              <li>Username: {UserData.username}</li>
              <li>Language code: {UserData.languge_code}</li>
              <li>is Premium: {UserData.is_premium ? 'Yes' : 'No'}</li>
            </ul>
          </>
        ):
        (
          <div className="text-2xl font-bold">Loading...</div>
        )
      }
    </main>
  );
}
