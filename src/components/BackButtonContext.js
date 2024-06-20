import React, { createContext, useState } from 'react';

export const BackButtonContext = createContext();

export const BackButtonProvider = ({ children }) => {
  const [showBackButton, setShowBackButton] = useState(false);

  return (
    <BackButtonContext.Provider value={{ showBackButton, setShowBackButton }}>
      {children}
    </BackButtonContext.Provider>
  );
};
