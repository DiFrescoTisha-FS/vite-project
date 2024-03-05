import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import axios from "axios";
// import EarthCanvas from "../../canvas/Earth"
// import commentsDesktopImage from '../../images/commentsDesktop.png';
// import commentsTabletImage from '../../images/commentsTablet.png';
// import commentsMobileImage from '../../images/commentsMobile.png';
// import Comments from "../../images/placeholder3.png";
// import TwinklingBackground from '../twinklingbackground/TwinklingBackground'
import { BsSendFill } from "react-icons/bs";
import { Button } from "../ButtonElements"; // Adjust based on the package you choose
import {
  CommentSectionContainer,
  CommentsBg,
  CommentWrapper,
  CommentRow,
  ImgWrap,
  Img,
  TextWrapper,
  FormWrap,
  TopLine,
  Heading,
  Subtitle,
  TextArea,
  CommentBtnWrapper,
  SketchfabEmbedWrapper,
} from "./CommentSectionElements";
// import SaturnCanvas from "../canvas/Saturn";

const CommentSection = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // This function is called when the rating changes
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // This function is called when the comment changes
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // This function is called when the form is submitted
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/comment-rating", {
        comment,
        rating,
      });
      console.log("Comment and rating submitted successfully!", response.data);
      setRating(0); // Reset rating
      setComment(""); // Reset comment
    } catch (error) {
      console.error("Failed to submit comment and rating", error);
    }
  };

  return (
    
    <CommentSectionContainer id="comments">
      {/* <TwinklingBackground /> */}
      <CommentsBg
      // backgroundImageDesktop={commentsDesktopImage}
      // backgroundImageTablet={commentsTabletImage}
      // backgroundImageMobile={commentsMobileImage}
      />
      <CommentWrapper style={{ zIndex: "20" }}>
        <CommentRow>
          <ImgWrap>
            {/* <SaturnCanvas /> */}
            {/* <JupiterScene /> */}
          </ImgWrap>
          <TextWrapper>
            <TopLine>Bam Fans</TopLine>
            <Heading>Before you go...</Heading>
            <Subtitle>
              Leave a comment for Trapstar Bam, and
              <br /> rate your galaxy tour!
              <br />
              Thanks for stopping by.
              <br />
              (You must me signed in to leave a comment.)
            </Subtitle>
            <FormWrap onSubmit={handleCommentSubmit}>
              <Rating
                value={rating}
                onChange={handleRatingChange} // Bind the handler here
              />
              <TextArea
                placeholder="Leave your comment here"
                value={comment}
                onChange={handleCommentChange}
              />
              <CommentBtnWrapper>
                <Button
                  to=""
                  type="submit"
                  $primary="true"
                  $dark="true"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {"Send"}&nbsp;&nbsp;{<BsSendFill size={20} />}
                </Button>
              </CommentBtnWrapper>
            </FormWrap>
          </TextWrapper>
        </CommentRow>
      </CommentWrapper>
    </CommentSectionContainer>
  );
};

export default CommentSection;
