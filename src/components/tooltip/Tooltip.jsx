import { TooltipContainer } from "./TooltipElements";

const Tooltip = ({ children, top, left, show }) => {
    return (
      <TooltipContainer top={top} left={left} show={show}>
        {children}
      </TooltipContainer>
    );
  };
  
  export default Tooltip;