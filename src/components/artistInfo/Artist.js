// ArtistSection.js
import GenericSection from './GenericSection';
import artistDesktopImage from '../../images/artistDesktop2.png';
import artistTabletImage from '../../images/artistTablet.png';
import artistMobileImage from '../../images/artistMobile.png';
import galaxy from "../../images/galaxy.jpg";

const ArtistSection = () => {
  return (
    <GenericSection
      id="artist"
      backgroundImageDesktop={artistDesktopImage}
      backgroundImageTablet={artistTabletImage}
      backgroundImageMobile={artistMobileImage}
      topLine="Approved Bam Bio"
      heading="Gavin Di Fresco"
      subtitle="Gavin Di Fresco, known professionally as Trapstar Bam, is an American rapper..."
      buttonLabel="See More"
      buttonTo="music"
      imgSrc={galaxy}
      alt="Galaxy image"
    />
  );
};

export default ArtistSection;
