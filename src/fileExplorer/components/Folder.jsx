import React, { useState } from "react";

const Folder = ({ file, handleSave }) => {
  const [expanded, setExpanded] = useState(false);
  const [addFolder, setAddFolder] = useState(false);
  const [fileName, setFileName] = useState([]);
  const [isFolder, setIsFolder] = useState(false);

  const handleAddFolder = (isFolder) => {
    setAddFolder(!addFolder);
    setIsFolder(isFolder);
    setExpanded(true);
  };

  const onSave = (e) => {
    if (e.key === "Enter" && fileName) {
      const newFolder = {
        id: new Date().getTime(),
        name: fileName,
        type: isFolder ? "folder" : "file",
        children: [],
      };
      handleSave(newFolder, file.id);
      setAddFolder(false);
    }
  };
  return (
    <>
      {file.type === "folder" ? (
        <div className="flex gap-4">
          <div onClick={() => setExpanded(!expanded)}>🗂️{file.name}</div>
          <button onClick={(e) => handleAddFolder(true)}> Add Folder</button>
          <button onClick={(e) => handleAddFolder(false)}> Add File</button>
        </div>
      ) : (
        <div>{file.name}📄</div>
      )}

      {addFolder && (
        <div>
          <span> {isFolder ? "🗂️" : "📄"}</span>
          <input
            type="text"
            autoFocus
            onInput={(e) => setFileName(e.target.value)}
            onBlur={(e) => {
              setAddFolder(false);
            }}
            onKeyDown={onSave}
          />
        </div>
      )}
      <div style={{ display: expanded ? "block" : "none", marginLeft: "30px" }}>
        {file.children?.map((child) => (
          <Folder key={child.id} file={child} handleSave={handleSave} />
        ))}
      </div>
    </>
  );
};

export default Folder;
