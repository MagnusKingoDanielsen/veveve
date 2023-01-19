import React from "react";

interface CardProps {
  data: {
    id: number;
    title: string;
    description: string;
    ekstra: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>{data.ekstra}</p>
    </div>
  );
};

export default Card;
