import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  // Fix: Handle null/undefined cases properly
  const [authUser, setAuthUser] = useState(() => {
    try {
      if (
        !initialAuthUser ||
        initialAuthUser === "undefined" ||
        initialAuthUser === "null"
      ) {
        return null; // Return null instead of undefined
      }
      return JSON.parse(initialAuthUser);
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem("Users"); // Clean corrupted data
      return null;
    }
  });

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
