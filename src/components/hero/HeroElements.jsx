import styled from "styled-components";
import { FaRocket, FaArrowAltCircleDown } from "react-icons/fa";


const maxWidth = "700px"; // Common max-width for various components

// Hero Container
export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 860px; // Adjust as needed
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 50px 0; // Adjust padding as needed
    flex-direction: column;
    justify-content: center; // Centers content vertically in the column
    align-items: center; // Centers content horizontally in the column
    height: 100%; // Remove fixed height to allow content to determine height
  }

  @media screen and (max-width: 768px) {
    margin-top: 100px;
    padding: 50px 0; // Adjust padding as needed
    flex-direction: column;
    justify-content: center; // Centers content vertically in the column
    align-items: center; // Centers content horizontally in the column
    height: 100%; // Remove fixed height to allow content to determine height
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${(props) => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  z-index: -1;

  @media screen and (max-width: 768px) {
    background: url(${(props) => props.backgroundImageMobile}) no-repeat center
      center;
    background-size: cover;
    background-position: center 1px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background: linear-gradient(to bottom, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%); */
      z-index: 3;
    } // Missing closing brace for &:after
  } // Missing closing brace for @media

  @media screen and (max-width: 768px) {
    background: url(${(props) => props.backgroundImageTablet}) no-repeat center
      center;
    background-size: cover;
    background-position: center 1px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background: linear-gradient(to bottom, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%); */
      z-index: 3;
    }
  }

  @media screen and (max-width: 480px) {
    background: url(${(props) => props.backgroundImageMobile}) no-repeat center
      center;
    background-size: cover;
    background-position: center 1px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background: linear-gradient(to bottom, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%); */
      z-index: 3; // Above the background image but below the content
    }
  }
`;
// Hero Content
export const HeroContent = styled.div`
  z-index: 22;
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
`;

// Paragraph within Hero Content
export const HeroP = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: ${maxWidth};
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
  }
`;

export const SaturnImage = styled.img`
  position: absolute;
  top: 300px;
  right: 300px;
  z-index: 3;
  width: 50px;
  height: auto;

  // Hide Saturn on tablet and mobile views
  @media screen and (max-width: 768px) {
    width: 65px;
    top: 70%;
    left: 15%;
    transform: translateX(-50%);
  }
`;

// Add this style for the JupiterCanvas container
export const JupiterCanvasContainer = styled.div`
  position: absolute; // Absolute position relative to the next relative parent
  top: 0; // Adjust as needed
  left: 0; // Adjust as needed
  width: 400px; // Set a fixed width
  height: 400px; // Set a fixed height
  z-index: 10; // Make sure it's above other content, adjust as needed
`;

export const EarthImage = styled.img`
  position: absolute;
  top: 500px;
  right: 400px;
  z-index: 3;
  width: 150px;
  height: auto;

  // Hide Earth on tablet and mobile views
  @media screen and (max-width: 768px) {
    width: 50px;
    left: 80%;
    transform: translateX(-50%);
  }
`;

export const EarthVideo = styled.video`
  position: absolute;
  top: 10%;
  left: 5%;
  z-index: 3;
  width: 450px;
  height: auto;

  // Hide Earth on tablet and mobile views
  @media screen and (max-width: 768px) {
    width: 50px;
    left: 80%;
    transform: translateX(-50%);
  }
`;

// Hero Button Wrapper
export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

// Icons
export const ArrowFilled = styled(FaRocket)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowCircle = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;