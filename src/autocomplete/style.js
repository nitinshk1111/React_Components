import { styled } from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  max-height: 200px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledSuggestionContainer = styled.ul`
  position: absolute;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
`;

export const StyledSuggestionItem = styled.li`
  padding: 6px 10px;
  cursor: pointer;
  &:hover {
    background: #bdcdce;
  }

  &.suggestion-item-active {
    background: #bdcdce;
  }
`;
