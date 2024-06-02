import React from "react";
import file from "../data/file.json";
import Folder from "./Folder";

const File = () => {
  const [fileData, setFileData] = React.useState(file);

  const updateFileData = (fileData, newData, currentFolderId) => {
    if (fileData.id === currentFolderId) {
      fileData.children.unshift(newData);
      return fileData;
    }
    const latestData =
      fileData.children &&
      fileData.children.map((data) =>
        updateFileData(data, newData, currentFolderId)
      );
    return { ...fileData, children: latestData };
  };

  const handleSave = (newData, currentFolderId) => {
    const result = updateFileData(fileData, newData, currentFolderId);
    setFileData({ ...result });
  };
  return (
    <>
      <Folder file={fileData} handleSave={handleSave} />
    </>
  );
};

export default File;
