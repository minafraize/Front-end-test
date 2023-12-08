import React, { createContext, useContext, ReactNode, useState } from "react";

// ----------------------------------------------------------------------

interface MainContextProps {
  children: ReactNode;
}

interface MainContextValue {
  fileContent: string;
  wordCount: Record<string, number>;
  updateFileContent: (content: string) => void;
  updateWordCount: (count: Record<string, number>) => void;
}

const MainContext = createContext<MainContextValue | undefined>(undefined);

export const MainProvider: React.FC<MainContextProps> = ({ children }) => {
  const [fileContent, setFileContent] = useState<string>("");
  const [wordCount, setWordCount] = useState<Record<string, number>>({});

  const updateFileContent = (content: string) => {
    setFileContent(content);
  };

  const updateWordCount = (count: Record<string, number>) => {
    setWordCount(count);
  };

  return (
    <MainContext.Provider
      value={{ fileContent, wordCount, updateFileContent, updateWordCount }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = (): MainContextValue => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext must be used within a MainProvider");
  }
  return context;
};
