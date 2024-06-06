
import { Footer } from "../components/Footer.jsx";
import { DescriptionAppartement } from "../components/DescriptionAppartement.jsx";

const PageAppartements = () => {
    return (
        <>
        <div className="PageAppartements">
          <DescriptionAppartement />
        </div>
        <Footer /> {/* J'ai mis le footer en dehors pour qu'il prennent tout la largeur sans margin des cotés */}
      </>
    );
}

export default PageAppartements;
