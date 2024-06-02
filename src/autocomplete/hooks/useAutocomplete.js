import { useRef, useState } from "react";
import { useOutsideClick } from "./useOutsideClick";

export const useAutocomplete = (filteredSuggestions) => {
  const [selected, setSelected] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const suggestionsRef = useRef();

  const handleSelect = (value, index) => {
    setShowSuggestions(false);
    setSelected(value);
    setActiveSuggestionIndex(index);
  };

  useOutsideClick(suggestionsRef, () => {
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
  });

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      // Enter key
      setSelected(filteredSuggestions[activeSuggestionIndex].name);
      setShowSuggestions(false);
    } else if (e.keyCode === 38) {
      // Up arrow
      if (activeSuggestionIndex === 0) return;
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === 40) {
      // Down arrow
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) return;
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  return {
    selected,
    showSuggestions,
    activeSuggestionIndex,
    handleSelect,
    setSelected,
    setShowSuggestions,
    handleKeyDown,
    suggestionsRef,
    setActiveSuggestionIndex,
  };
};
