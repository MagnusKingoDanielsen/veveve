import Style from "../../../styles/footer.module.css";

interface Footer {
  Line1: string;
  Line2: string;
  Line3: string;
  Line4: string;
}

const FooterInfo: React.FC<Footer> = ({ Line1, Line2, Line3, Line4 }) => {
  return (
    <div className={Style.FooterInfo}>
      <h1>{Line1}</h1>
      <h1>{Line2}</h1>
      <h1>{Line3}</h1>
      <h1>{Line4}</h1>
    </div>
  );
};

export default FooterInfo;