'use client';

import React, { createContext, useContext, useState } from 'react';
import { links } from '@/lib/data';

type linkNameProps = (typeof links)[number]['name'];

type ActiveSectionContextProps = {
  activeSection: linkNameProps;
  setActiveSection: React.Dispatch<React.SetStateAction<linkNameProps>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextProps | null>(null);

export const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<linkNameProps>('Home');
  // Time Of Last Click
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);
    if (context === null) {
      throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
    }
    return context;
  
}
