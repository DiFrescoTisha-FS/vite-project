import { Button } from "../ButtonElements";
import tattooFingers from "../../images/tattoofingers.png";
import thoughtsDesktopImage from "../../images/thoughtsDesktop1000.png"
// import thoughtsTabletImage from "../../images/thoughtsTablet.png"
// import thoughtsMobileImage from "../../images/thoughtsMobile.png"
import PlanetAudioPlayer from '../planetaudioplayer/PlanetAudioPlayer';
import Song4 from "../../songs/Up All Night.mp3";
import Song5 from "../../songs/Up in the Clouds.mp3";
import Song6 from "../../songs/Message To God (Prod by Bray Kaizen).mp3";
import Song7 from "../../songs/My Legacy.mp3";
import Song8 from "../../songs/Changed Things Freestyle.mp3";
import Song9 from "../../songs/Rockstar Lifestyle.mp3";
// import TwinklingBackground from "../twinklingbackground/TwinklingBackground";
import {
  ThoughtsContainer,
  ThoughtsBg,
  ThoughtsWrapper,
  ThoughtsRow,
  BtnWrap,
  ImgWrap,
  Img,
  ArrowFilled,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  TrapstarText,
} from "./ThoughtsElements";

const MAP_AREAS = {
  name: "thoughts-map",
  areas: [
    {
      shape: "circle",
      coords: [1100,140,72], // Coordinates for "10 Below"
      href: Song4, // Make sure this points to the correct song
      alt: "Up All Night",
      title: "Up All Night",
    },
    {
      shape: "circle",
      coords: [1290,98,72], // Coordinates for "Blitz"
      href: Song5, // Make sure this points to the correct song
      alt: "Up in the Clouds",
      title: "Click to hear Up in the Clouds",
    },
    {
      shape: "circle",
      coords: [1500,115,105], // Coordinates for "Call Me Back"
      href: Song6, // Make sure this points to the correct song
      alt: "Bankroll (feat. CD Mumba)",
      title: "Message to God (prod. by Bray Kaizen",
    },
    {
      shape: "circle",
      coords: [1620,325,114], // Coordinates for "Call Me Back"
      href: Song7, // Make sure this points to the correct song
      alt: "My Legacy",
      title: "My Legacy",
    },
    {
      shape: "circle",
      coords: [1468,555,85], // Coordinates for "Call Me Back"
      href: Song8, // Make sure this points to the correct song
      alt: "Changed Things Freestyle",
      title: "Changed Things Freestyle",
    },
    {
      shape: "circle",
      coords: [1198,775,110], // Coordinates for "Call Me Back"
      href: Song9, // Make sure this points to the correct song
      alt: "Rockstar Lifestyle (feat. CD Mumba)",
      title: "Rockstar Lifestyle (feat. CD Mumba)",
    },
    // ... Additional areas can be added if necessary
  ],
};

const Thoughts = ({
  // id,
  imgStart,
  // img,
}) => {



  return (
    <ThoughtsContainer id="thoughts">
      {/* <TwinklingBackground /> */}
      <ThoughtsBg>
        <PlanetAudioPlayer
          mapAreas={MAP_AREAS}
          image={thoughtsDesktopImage}
        />
        </ThoughtsBg>
      <ThoughtsWrapper style={{zIndex: '20'}}>
        <ThoughtsRow imgStart={imgStart}>
          <TextWrapper>
            <TopLine>Bam Quotes</TopLine>{" "}
            <Heading>Thoughts on Music</Heading>
            <Subtitle>
              {/* 'Music is a way for me to escape reality. It exposes my flaws, and
              pushes me to be a better person. Always believe in yourself, even
              when no one else does. Do not let life get in the way of following
              your dreams.' */}
            </Subtitle>{" "}
            <TrapstarText>~Bamvsthewrld</TrapstarText>
            <BtnWrap>
              <Button
                to="comments"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                textDecoration="none"
                $primary="true"
                $dark="true"
                style={{ marginTop: "20px" }}
              >
                {"Continue"}&nbsp;&nbsp;{<ArrowFilled size={20} />}
              </Button>
            </BtnWrap>
          </TextWrapper>

          <ImgWrap>
            <Img
              src={tattooFingers}
              alt="singer with tattooed fingers on top of his head"
            />
          </ImgWrap>
        </ThoughtsRow>
      </ThoughtsWrapper>
    </ThoughtsContainer>
  );
};

export default Thoughts;