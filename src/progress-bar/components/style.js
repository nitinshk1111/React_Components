import { styled } from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  height: 28px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 9999px;
  margin-bottom: 10px;
`;

export const StyledBackGround = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 9999px;
  height: 100%;

  & > span {
    z-index: 10;
  }
`;

// ${({ $props }) => {
//   return $props.success && successStyle;
// }}
// ${({ $props }) => $props.danger && dangerStyle}
// ${({ $props }) => $props.warning && warningStyle}

export const StyledProgress = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.$props.primary
      ? "#00bcd4"
      : props.$props.success
      ? "green"
      : props.$props.warning
      ? "#ff9800"
      : props.$props.danger
      ? "#f44336"
      : "#00bcd4",
  },
}))`
  border-radius: 9999px;
  height: 100%;
  position: absolute;
  top: 0;
  width: ${({ $stepPercent }) => {
    return ($stepPercent < 100 ? $stepPercent : 100) + "%";
  }};
`;
