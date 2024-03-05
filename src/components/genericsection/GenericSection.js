// GenericSection.js
import { Button } from "../ButtonElements";
import { FaArrowAltCircleDown } from "react-icons/fa";
import TwinklingBackground from "../twinklingbackground/TwinklingBackground";
import {
  SectionContainer,
  SectionBg,
  SectionWrapper,
  SectionRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./SectionElements";

const GenericSection = ({
    id,
    backgroundImageDesktop,
    backgroundImageTablet,
    backgroundImageMobile,
    topLine,
    heading,
    subtitle,
    buttonLabel,
    buttonTo,
    imgSrc,
    alt
}) => {
  return (
    <SectionContainer id={id}>
      <TwinklingBackground />
      <SectionBg
        backgroundImageDesktop={backgroundImageDesktop}
        backgroundImageTablet={backgroundImageTablet}
        backgroundImageMobile={backgroundImageMobile}
      />
      <SectionWrapper>
        <SectionRow>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading>{heading}</Heading>
            <Subtitle>{subtitle}</Subtitle>
            <BtnWrap>
              <Button
                to={buttonTo}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                $primary="true"
                $dark="true"
              >
                {buttonLabel}&nbsp;&nbsp;<FaArrowAltCircleDown size={20} />
              </Button>
            </BtnWrap>
          </TextWrapper>
          <ImgWrap>
            <Img src={imgSrc} alt={alt} />
          </ImgWrap>
        </SectionRow>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default GenericSection;
