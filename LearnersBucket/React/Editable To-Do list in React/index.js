/*

https://www.youtube.com/watch?v=pzj6ocsnHzw&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=1

https://codesandbox.io/s/wonderful-borg-9lxq3x

https://www.w3schools.com/charsets/ref_utf_arrows.asp

*/

import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        { text: e.target.value, completed: false, id: Date.now() },
      ]);

      inputRef.current.value = "";
    }
  };

  const handleCompleted = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const filteredList = todos.filter((todo) => todo.id !== id);
    setTodos(filteredList);
  };

  const changeTodo = (id, newText) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
      }
      return todo;
    });

    setTodos(updatedList);
  };

  return (
    <div className="App">
      <input type="text" onKeyPress={handleKeyPress} ref={inputRef} />
      {todos.map((todo, idx) => {
        return (
          <Items
            {...todo}
            key={idx}
            updateCompleted={handleCompleted}
            deleteTodo={handleDelete}
            updateText={changeTodo}
          />
        );
      })}
    </div>
  );
}

const Items = ({
  text,
  completed,
  id,
  updateCompleted,
  deleteTodo,
  updateText,
}) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  return (
    <div className="item">
      <div className="circle" onClick={() => updateCompleted(id)}>
        {completed ? <span>&#10003;</span> : ""}
      </div>
      <div
        className={completed ? "strike" : ""}
        onDoubleClick={() => setEdit(true)}
      >
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
              updateText(id, e.target.value);
            }}
            onBlur={() => {
              setEdit(false);
              updateText(id, editText);
            }}
          />
        ) : (
          text
        )}
      </div>
      <div className="close" onClick={() => deleteTodo(id)}>
        X
      </div>
    </div>
  );
};

/*

.App {
  font-family: sans-serif;
  text-align: center;
  max-width: 300px;
  margin: auto;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid #000;
}

.close {
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s ease;
}

.item:hover .close {
  opacity: 1;
}

.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid green;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

input {
  width: 100%;
  padding: 5px;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.strike {
  text-decoration: line-through;
}


*/
