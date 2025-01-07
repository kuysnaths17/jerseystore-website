'use client'
import React, { createContext, useState } from "react";

// Create the context
export const NavContext = createContext();

// Create the provider component
export const NavProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("Homepage");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [itemId, setItemId] = useState("");

  return (
    <NavContext.Provider
      value={{ activeLink, setActiveLink, isNavOpen, setIsNavOpen, itemId, setItemId }}
    >
      {children}
    </NavContext.Provider>
  );
};