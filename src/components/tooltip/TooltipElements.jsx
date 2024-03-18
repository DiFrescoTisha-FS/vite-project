import styled from "styled-components";

// Tooltip styled component
export const TooltipContainer = styled.div`
  position: absolute;
  top: ${(props) => props.top || 0}px;
  left: ${(props) => props.left || 0}px;
  transform: translate(-50%, 50px); // Adjust as needed
  padding: 8px;
  font-size: 12px;
  color: #000; // Text color - you might want this to be dark for contrast
  background: rgba(128, 123, 255, 0.7)
; // Semi-transparent white
  border-radius: 4px;
  text-align: center;
  z-index: 1000;
  pointer-events: none;
`;