import React from "react";
import Image from "next/image";
import VeVeVeLogo from "../../public/images/logo.svg";
import Style from "../../styles/footer.module.css";
import FooterInfo from "./controller/FooterInfo";

export default function Footer() {
  return (
    <div className={Style.footer}>
      <div className={Style.logo}>
        <Image src={VeVeVeLogo} alt="Logo of VeVeVe" />
      </div>
      <div className={Style.info}>
        <FooterInfo
          Line1="Christian D Xs Vej 173"
          Line2="8270 Højbjerg"
          Line3="+ 45 61 66 39 30"
          Line4="hello@veveve.dk"
        />
        <FooterInfo
          Line1="Social Media"
          Line2="Twitter"
          Line3="Instagram"
          Line4="LinkedIn"
        />
      </div>
    </div>
  );
}
