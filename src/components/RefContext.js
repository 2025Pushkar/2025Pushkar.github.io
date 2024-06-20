// RefContext.js
import React, { createContext, useRef } from 'react';

export const RefContext = createContext();

export const RefProvider = ({ children }) => {
  const languagesRef = useRef(null);
  const webdevRef = useRef(null);
  const cloudRef = useRef(null);
  const biRef = useRef(null);
  const databasesRef = useRef(null);

  return (
    <RefContext.Provider value={{ languagesRef, webdevRef, cloudRef, biRef, databasesRef }}>
      {children}
    </RefContext.Provider>
  );
};
