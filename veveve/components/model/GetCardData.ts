import { GetStaticProps } from "next";

interface Props {
  Data: any;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch("http://localhost:3000/api/hello")
    .then((res) => res.json())
    .catch((err) => console.error(err));
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
