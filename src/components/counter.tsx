"use client";

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    // If auth or user data is not loaded or user is not signed in, return null
    return null;
  }

  return (
    <>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
    </>
  );
};
