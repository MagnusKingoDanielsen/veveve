import React from "react";

interface CardProps {
  title: string;
  description: string;
  extra?: string;
}

const Card: React.FC<CardProps> = ({ title, description, extra }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {extra && <p>{extra}</p>}
    </div>
  );
};

export { Card };
