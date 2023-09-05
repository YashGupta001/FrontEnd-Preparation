/*

https://www.youtube.com/watch?v=20F_KzHPpvI&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo&index=3

https://github.com/piyush-eon/frontend-interview-questions/blob/master/reactjs-interview-questions/file-explorer/src/data/folderData.js

React Interview Question to build an Infinite File Explorer will be created in this video along with tips and tricks to tackle your React JS and JavaScript Questions in Frontend Machine Coding Interviews.

*/

// app.js

import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import "./styles.css";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <>
      <Folder explorer={explorerData} />
    </>
  );
}

// Folder

import { useState } from "react";

function Folder1({ explorer }) {
  const [expand, setExpand] = useState(false);
  console.log(explorer);

  const handleClick = () => {
    setExpand(!expand);
  };

  if (explorer.isFolder) {
    return (
      <div style={{ margin: 10 }}>
        <div className="folder" onClick={handleClick}>
          <span>📁{explorer.name}</span>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            // return <span>{exp.name}</span>;
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file"> 📄 {explorer.name}</span>;
  }
}

// export default Folder;

/*

.folder {
  margin-top: 6px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  width: 300px;
  cursor: pointer;
}



.folder > span {
    margin: 0px 5px;
  }
  
  
  .file {
    margin-top: 5px;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
  }
  


*/
