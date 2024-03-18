import styled from "styled-components";

export const PlanetMapWrapper = styled.div`
  position: relative;
  z-index: 0; // Ensure it's above other elements
  width: 100%; // Full width of the container
  max-width: 1777px; // Max-width to match your design
  height: auto;
  margin: 0 auto; // Center it if necessary

  // Consider adding responsive styles for different breakpoints
  @media (max-width: 768px) {
    max-width: 100%; // Adjust the width on smaller screens
    height: auto; // Ensure the height is proportional
  }
`;

// Tooltip styled component
export const Tooltip = styled.div`
  position: absolute;
  top: ${(props) => props.top || 0}px;
  left: ${(props) => props.left || 0}px;
  transform: translate(-50%, 50px); // Adjust as needed
  padding: 8px;
  color: #000; // Text color - you might want this to be dark for contrast
  background: rgba(255, 255, 255, 0.5); // Semi-transparent white
  border-radius: 4px;
  text-align: center;
  z-index: 1000;
  pointer-events: none;
`;