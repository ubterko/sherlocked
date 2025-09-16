// i18n-context.js
import React from 'react';

const PerseusI18nContext = React.createContext({
    strings: {
        chooseNumAnswers: ({numCorrect}: {numCorrect: string}) => 
            `Choose ${numCorrect} answers`,
        chooseAllAnswers: "Choose all that apply",
        chooseOneAnswer: "Choose one answer",
    },
});

export const usePerseusI18n = () => React.useContext(PerseusI18nContext);

export const PerseusI18nProvider = ({ children, strings }) => {
  return (
    <PerseusI18nContext.Provider value={{ strings }}>
      {children}
    </PerseusI18nContext.Provider>
  );
};
