// import heroBackground from "../../assets/hero/hero-background.jpg";
import { BackgroundCircles } from "../design/Hero";
import Section from "../Section";

const HeroSection = () => {
  return (
      <Section
        className="pt-[36rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
    <div className="container relative">
      {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
        <img
          src={heroBackground}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        /> */}

      <BackgroundCircles />
        </div>
        </Section>
  );
};

export default HeroSection;

// import { useState } from "react";
// import { Button } from "../ButtonElements";
// import TwinklingBackground from "../twinklingbackground/TwinklingBackground";
// import StylishText from "../stylishText/StylishText";
// // import earthVideo from "../../videos/purplevideo.mp4";
// // import JupiterCanvas from '../canvas/JupiterCanvas';

// // import { Clouds } from "../twinklingbackground/TwinklingBackground";
// import {
//   HeroContainer,
//   HeroBg,
//   HeroContent,
//   HeroP,
//   HeroBtnWrapper,
//   ArrowFilled,
//   ArrowCircle,
//   // JupiterCanvasContainer
// } from "./HeroElements";

// const HeroSection = () => {
//   const [hover, setHover] = useState(false);

//   const onHover = () => {
//     setHover(!hover);
//   };

//   return (
//     <HeroContainer id="home">
//       <HeroBg>

//         <TwinklingBackground
//           saturnImage="https://i.imgur.com/yM3SlcH.png"
//           cometImage="https://i.imgur.com/kW59Usj.png"
//           earthImage="https://i.imgur.com/qTwsepd.png"
//           // earthVideo={earthVideo}
//           // earthVideo={require("../../videos/purple_earth_video.mp4")}
//         />
//       </HeroBg>
//       {/* <JupiterCanvasContainer>
//         <JupiterCanvas />
//       </JupiterCanvasContainer> */}
//       <HeroContent style={{zIndex: '20'}}>
//         <StylishText />
//         {/* <HeroH1>Trapstar Bam</HeroH1> */}
//         <HeroP>
//           {
//           `Witnessing Trapstar Bam's evolution as an artist has been truly
//           inspiring. Since we first collaborated back in 2020, his
//           dedication and love for music have propelled his growth tremendously.
//           It's a privilege to watch him not just meet, but far exceed, every
//           expectation.`
//           }
//         </HeroP>
//         <HeroP style={{ marginTop: "20px" }}>~Bray Kaizen</HeroP>
//         <HeroBtnWrapper>
//           <Button
//             to="bio" // the target id to scroll to
//             onMouseEnter={onHover}
//             onMouseLeave={onHover}
//             $primary="true"
//             $dark="true"
//             smooth={true}
//             duration={500}
//             spy={true}
//             exact="true"
//             offset={-80}
//             onClick={(e) => {
//               e.stopPropagation();
//               // Other click handling logic
//             }}
//           >
//             {`Bam's Galaxy`} {hover ? <ArrowFilled /> : <ArrowCircle />}
//           </Button>
//         </HeroBtnWrapper>
//       </HeroContent>
//     </HeroContainer>
//   );
// };

// export default HeroSection;
