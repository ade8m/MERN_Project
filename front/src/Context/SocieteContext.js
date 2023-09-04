import { createContext, useContext, useState } from 'react';

const SocieteContext = createContext();

export function SocieteProvider({ children }) {
  const [societeId, setSocieteId] = useState(null);

  return (
    <SocieteContext.Provider value={{ societeId, setSocieteId }}>
      {children}
    </SocieteContext.Provider>
  );
}

export function useSociete() {
  return useContext(SocieteContext);
}
