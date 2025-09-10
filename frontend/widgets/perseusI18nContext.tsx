// i18n-context.js
import React from 'react';

const PerseusI18nContext = React.createContext({});

export const usePerseusI18n = () => {
  const context = React.useContext(PerseusI18nContext);
  if (!context) {
    throw new Error('usePerseusI18n must be used within a PerseusI18nProvider');
  }
  return context;
};

export const PerseusI18nProvider = ({ children, strings }) => {
  return (
    <PerseusI18nContext.Provider value={{ strings }}>
      {children}
    </PerseusI18nContext.Provider>
  );
};