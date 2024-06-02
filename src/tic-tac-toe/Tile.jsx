import React from "react";

const Tile = ({ onTileClick, tileIndex, className }) => {
  const handleClick = () => {
    onTileClick(tileIndex);
  };

  return (
    <div className="tile" onClick={handleClick}>
      <span className={className}> </span>
    </div>
  );
};

export default Tile;
