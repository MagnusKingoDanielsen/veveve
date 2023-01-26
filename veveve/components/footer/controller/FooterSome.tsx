import Style from "./Footer.module.css";
import { SoMe } from "../../model/FooterModel";

let some: SoMe[] = [
  new SoMe(1, "https://www.facebook.dk", "Facebook"),
  new SoMe(2, "https://www.Twitter.com", "Twitter"),
  new SoMe(3, "https://www.instagram", "Instagram"),
];

const FooterSome: React.FC = ({}) => {
  return (
    <div className={Style.FooterInfo}>
      <h3>Social Medias</h3>
      {some.map((SoMe) => (
        <h3 key={SoMe.id}>
          <a href={SoMe.url} target="_blank" rel="noreferrer">
            {SoMe.name}
          </a>
        </h3>
      ))}
    </div>
  );
};

export default FooterSome;
