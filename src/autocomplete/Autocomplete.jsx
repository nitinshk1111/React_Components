import React, { useCallback, useEffect } from "react";
import { debounce } from "../utils/debounce.util";
import { useAutocomplete } from "./hooks/useAutocomplete";
import {
  StyledContainer,
  StyledInput,
  StyledSuggestionContainer,
  StyledSuggestionItem,
} from "./style";

const Autocomplete = ({ filteredSuggestions, onSearch }) => {
  const {
    selected,
    setSelected,
    showSuggestions,
    setShowSuggestions,
    activeSuggestionIndex,
    suggestionsRef,
    handleSelect,
    handleKeyDown,
    setActiveSuggestionIndex,
  } = useAutocomplete(filteredSuggestions);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setShowSuggestions(false);
      setActiveSuggestionIndex(-1);
      return;
    }
    onSearch(e.target.value);
    setShowSuggestions(true);
  };

  useEffect(() => {
    const selected = suggestionsRef?.current?.querySelector(
      ".suggestion-item-active"
    );
    if (selected) {
      selected.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeSuggestionIndex]);

  const debouncedChangeHandler = useCallback(debounce(handleChange, 400), []);

  const handleDebouncedChanges = (e) => {
    setSelected(e.target.value);
    debouncedChangeHandler(e);
  };

  return (
    <>
      <StyledContainer ref={suggestionsRef} data-testid="autocomplete">
        <StyledInput
          data-testid="searchInput"
          onChange={handleDebouncedChanges}
          value={selected}
          placeholder="Search Country"
          onKeyDown={handleKeyDown}
          onFocus={(e) =>
            e.target.value &&
            setShowSuggestions(true) &&
            handleDebouncedChanges(e)
          }
        />
        {showSuggestions && filteredSuggestions.length > 0 && (
          <StyledSuggestionContainer data-testid="suggestionContainer">
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <StyledSuggestionItem
                  data-testid="suggestionItem"
                  key={suggestion.code}
                  onClick={() => handleSelect(suggestion.name, index)}
                  className={
                    activeSuggestionIndex === index
                      ? "suggestion-item-active"
                      : ""
                  }
                >
                  {suggestion.name}
                </StyledSuggestionItem>
              );
            })}
          </StyledSuggestionContainer>
        )}
      </StyledContainer>
    </>
  );
};

export default Autocomplete;
