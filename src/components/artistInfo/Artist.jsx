import { useRef, useState, useEffect } from "react";
import galaxy from "../../images/galaxy.jpg";
import { Button } from "../ButtonElements";
import { FaArrowAltCircleDown } from "react-icons/fa";
import artistDesktopImage from "../../images/artistDesktop4.png";
// import artistTabletImage from '../../images/artistTablet1.png';
// import artistMobileImage from '../../images/artistMobile.png';
import ImageMapper from "react-img-mapper";
import Song1 from "../../songs/10_Below.mp3";
import Song2 from "../../songs/Blitz.mp3";
import Song3 from "../../songs/call me back.mp3";
// import Song4 from "../../songs/call me back.mp3";

// import TwinklingBackground from "../twinklingbackground/TwinklingBackground";

import {
  ArtistInfoContainer,
  ArtistBg,
  ArtistInfoWrapper,
  ArtistInfoRow,
  TextWrapper,
  TopLine,
  Heading,
  // Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  PlanetMapWrapper,
  Tooltip,
} from "./ArtistElements";

const MAP_AREAS = {
  name: "song-map",
  areas: [
    {
      shape: "circle",
      coords: [348, 330, 130], // Coordinates for "10 Below"
      href: Song1, // Make sure this points to the correct song
      alt: "10 Below",
      title: "10 Below",
    },
    {
      shape: "circle",
      coords: [250, 650, 94], // Coordinates for "Blitz"
      href: Song2, // Make sure this points to the correct song
      alt: "Blitz",
      title: "Blitz",
    },
    {
      shape: "circle",
      coords: [165, 1025, 62], // Coordinates for "Call Me Back"
      href: Song3, // Make sure this points to the correct song
      alt: "Call Me Back",
      title: "Call Me Back",
    },
    // ... Additional areas can be added if necessary
  ],
};

const ArtistInfo = ({
  // darkText,
  alt,
}) => {
  // Create a ref to the audio player
  const audioPlayer = useRef();
  const [currentSong, setCurrentSong] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const mapWrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const togglePlayPause = (songHref) => {
    const isCurrentSongPlaying = isPlaying && currentSong === songHref;

    if (isCurrentSongPlaying) {
      setIsPlaying(false); // This will pause the song.
    } else {
      setCurrentSong(songHref); // Change the song.
      setIsPlaying(true); // This will play the new song.
    }
  };

  const onAreaClicked = (area) => {
    togglePlayPause(area.href);
  };

  useEffect(() => {
    const audioEl = audioPlayer.current;
    audioEl.src = currentSong;
    if (isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }, [currentSong, isPlaying]);
  
  const onAreaEnter = (area) => {
    // Since your shape is a circle, the area.coords array contains [x, y, radius].
    // The tooltip will be positioned above the center of the circle.
    const [x, y, radius] = area.coords;
    setTooltip(area.title);
    
    // Adjust these values as needed to position the tooltip correctly relative to the circle's center
    const offsetX = -50; // This offset will center the tooltip over the circle
    const offsetY = -20; // This offset will move the tooltip above the circle
    
    // You might need to include the offsets for your specific tooltip dimensions
    setTooltipPos({
      left: x + offsetX, // Center the tooltip on the x coordinate of the circle
      top: y - radius + offsetY, // Position the tooltip above the circle
    });
  };

  const onAreaLeave = () => {
    setTooltip("");
    setTooltipPos({ top: 0, left: 0 }); // Optionally reset the position
  };

  return (
    <>
      <ArtistInfoContainer id="bio">
        {/* <TwinklingBackground /> */}

        <ArtistBg>
          <PlanetMapWrapper ref={mapWrapperRef}>
            <ImageMapper
              src={artistDesktopImage}
              map={MAP_AREAS}
              onClick={(area, event) => onAreaClicked(area, event)}
              onMouseEnter={(area, event) => onAreaEnter(area, event)} // Make sure to pass the event here
              onMouseLeave={onAreaLeave}
              width={1777}
              height={1100}
              fillColor="transparent"
            />
            {tooltip && (
              <Tooltip top={tooltipPos.top} left={tooltipPos.left}>
                {tooltip}
              </Tooltip>
            )}
          </PlanetMapWrapper>
        </ArtistBg>

        <ArtistInfoWrapper style={{ zIndex: "20" }}>
          <ArtistInfoRow>
            <TextWrapper>
              <TopLine>Approved Bam Bio</TopLine>
              <Heading>Gavin Di Fresco</Heading>
              {/* <Subtitle darkText={darkText}>Gavin Di Fresco, known professionally as Trapstar Bam, is an American rapper, singer, and songwriter who shares his life experiences in his lyrics, inspiring others who can relate to the issues of his generation. Career highlights include a live performance at Innovative Academy prom in Hendersonville, NC, and a sold-out show in his home town of Brevard, NC.'</Subtitle> */}
              <BtnWrap>
                <Button
                  to="music"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  $primary="true"
                  $dark="true"
                >
                  {"See More"}&nbsp;&nbsp;{<FaArrowAltCircleDown size={20} />}
                </Button>
              </BtnWrap>
            </TextWrapper>

            <ImgWrap>
              <Img src={galaxy} alt={alt} />
            </ImgWrap>
          </ArtistInfoRow>
        </ArtistInfoWrapper>
      </ArtistInfoContainer>
      <audio key={currentSong} ref={audioPlayer} preload="auto" onEnded={() => setIsPlaying(false)} />

    </>
  );
};

export default ArtistInfo;
