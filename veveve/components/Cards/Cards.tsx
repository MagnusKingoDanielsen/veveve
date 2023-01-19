import { GetStaticProps } from "next";

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

export const getStaticProps: GetStaticProps = async () => {
  const cardData = [
    {
      title: "Card 1",
      description: "This is card 1",
    },
    {
      title: "Card 2",
      description: "This is card 2",
      extra: "Some extra information",
    },
    {
      title: "Card 3",
      description: "This is card 3",
    },
  ];

  return {
    props: {
      cardData,
    },
  };
};

const CardPage: React.FC<{ cardData: CardProps[] }> = ({ cardData }) => {
  return (
    <div>
      {cardData.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
};

export default CardPage;
