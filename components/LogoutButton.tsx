"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { logout } from "../lib/api/auth";

export default function LogoutButton() {
  const router = useRouter();

  const onLogout = async () => {
    await logout();
    router.push("/signin");
  };

  return (
    <button
      className="px-3 py-2 rounded-lg hover:bg-gray-200"
      onClick={onLogout}
    >
      Logout
    </button>
  );
}
