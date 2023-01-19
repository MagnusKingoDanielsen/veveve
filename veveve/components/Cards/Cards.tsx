import React from "react";
import Card from "./Card";
import { GetStaticProps } from "next";

interface CardModel {
  id: number;
  title: string;
  description: string;
  ekstra: string;
}
export type { CardModel };

interface Props {
  cardData: CardModel[];
}

const CardPage: React.FC<Props> = ({ cardData }) => {
  return (
    <div>
      {cardData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch data here, in this case we're using some Lorem Ipsum text
  const cardData: CardModel[] = [
    {
      id: 1,
      title: "Lorem Ipsum 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ekstra: "...",
    },
    {
      id: 2,
      title: "Lorem Ipsum 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ekstra: "...",
    },
    {
      id: 3,
      title: "Lorem Ipsum 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ekstra: "...",
    },
    {
      id: 4,
      title: "Lorem Ipsum 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ekstra: "...",
    },
  ];
  return { props: { cardData } };
};

export default CardPage;
