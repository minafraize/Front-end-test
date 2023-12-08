import React, { ReactNode } from "react";

import "./Card.css";

// ----------------------------------------------------------------------

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-title">
        <h4> {title} </h4>
      </div>
      <div className="card-children"> {children} </div>
    </div>
  );
};

export default Card;
