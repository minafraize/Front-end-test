import React from "react";

import FileUpload from "./components/FileUpload";
import FileContent from "./components/FileContent";
import { MainProvider } from "./context/MainContext";

// ----------------------------------------------------------------------

const App: React.FC = () => {
  return (
    <MainProvider>
      <FileUpload />
      <FileContent />
    </MainProvider>
  );
};

export default App;
