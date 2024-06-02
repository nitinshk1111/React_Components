import React from "react";
import { StyledBackGround, StyledContainer, StyledProgress } from "./style";

const ProgressBar = ({ type, color, progress = 0, ...props }) => {
  return (
    <StyledContainer>
      <StyledBackGround>
        <span data-testid="progress-percent">{Math.min(progress, 100)}%</span>
      </StyledBackGround>
      <StyledProgress
        data-testid="progress-bar"
        $stepPercent={progress}
        $props={props}
      />
    </StyledContainer>
  );
};

export default ProgressBar;
