interface Props {
  data: any;
}

const MyComponent = ({ data }: Props) => {
  // use the data in your component
  return <div>{data}</div>;
};

export default MyComponent;
