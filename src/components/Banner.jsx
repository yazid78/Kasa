import BannerImg from "../assets/BannerImg.svg";
import "../scss/Banner.scss";

export function Banner() {
  return (
    <div className="imgBanner">
      <img src={BannerImg} alt="image banner " />
      <div className="bannerText">
                Chez vous, partout et ailleurs
            </div>
    </div>
  );
}
