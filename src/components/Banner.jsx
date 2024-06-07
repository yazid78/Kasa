import BannerImg from "../assets/BannerApropos.png";
import "../scss/Banner.scss";

export function Banner({ imgSrc , bannerTexte ="Chez vous, partout et ailleurs"}) {
  return (
    <div className="imgBanner">
      <img src={imgSrc || BannerImg} alt="image banner" />
      <div className="bannerText">
       {bannerTexte}
      </div>
    </div>
  );
}
