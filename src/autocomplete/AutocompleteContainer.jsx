import { useState } from "react";
import Autocomplete from "./Autocomplete";

import { countryData } from "./autocomplete.data";

const AutocompleteContainer = () => {
  const [suggestions, setSuggestions] = useState(countryData);

  const handleFilterData = (searchTerm) => {
    const filteredData = countryData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredData);
  };

  return (
    <div style={{ width: "300px" }} data-testid="autocomplete-container">
      Autocomplete Container
      <Autocomplete
        filteredSuggestions={suggestions}
        onSearch={handleFilterData}
      />
    </div>
  );
};

export default AutocompleteContainer;
