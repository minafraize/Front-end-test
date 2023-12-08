import React from "react";

import "./FileUpload.css";
import { useMainContext } from "../../context/MainContext";

// ----------------------------------------------------------------------

const FileUpload: React.FC = () => {
  const { updateFileContent, updateWordCount } = useMainContext();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("event", e);

    if (!file) {
      alert("Please select a file.");
      return;
    }

    if (!file.type || !file.type.startsWith("text/")) {
      alert("Invalid file type. Please select a text file.");
      return;
    }

    if (!file.size) {
      alert("OoOPS! the file is empty. Choose another file");
      return;
    }

    try {
      const fileContent = await file.text();
      updateFileContent(fileContent);

      const wordCount = countWords(fileContent);
      updateWordCount(wordCount);
    } catch (error) {
      console.log("error", error);
      alert("Error reading the file. Please try again.");
    }
  };

  // Count the words of the file content
  const countWords = (content: string): Record<string, number> => {
    const words = content.split(/\s+/);
    return words.reduce((count, word) => {
      count[word] = (count[word] || 0) + 1;
      return count;
    }, {} as Record<string, number>);
  };

  return (
    <div className="input-container">
      <input
        type="file"
        data-testid="file-upload"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
