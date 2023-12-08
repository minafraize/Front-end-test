import React from "react";

import "./FileContent.css";
import Card from "../Card";
import { useMainContext } from "../../context/MainContext";

// ----------------------------------------------------------------------

const FileContent: React.FC = () => {
  const { wordCount, fileContent } = useMainContext();

  return Object.keys(wordCount).length ? (
    <div className="root">
      <div className="file-content">
        <Card title="file content" children={fileContent} />
      </div>
      <div className="count-words">
        <Card
          title="occurrence of each word"
          children={
            <ul>
              {Object.entries(wordCount).map(([word, count]) => (
                <li key={word}>
                  <p>{word}</p>
                  <span>{count}</span>
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  ) : null;
};

export default FileContent;
