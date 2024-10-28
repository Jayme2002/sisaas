"use client";

import useAuth  from "@/providers/useAuth";

export default function Admin() {
  const { user } = useAuth();

  return (
    <div className="w-full flex-1 shadow-lg h-full p-16 bg-zinc-50 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Admin</h1>
      <p>Welcome to your Admin {user?.displayName}!</p>
      {}
    </div>
  );
}

