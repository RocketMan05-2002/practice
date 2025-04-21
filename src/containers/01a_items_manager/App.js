import React, { useState, useEffect } from "react";
import data from "./data/data.json";
import "./styles.css";

const ItemLog = () => {
  const [nData, setNData] = useState([]);
  const [showAddInput, setShowAddInput] = useState(false);
  const [addValue, setAddValue] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateVal, setUpdateVal] = useState("");
  useEffect(() => {
    setNData(data);
  }, []);
  function handleAddValue(e, val) {
    if (e.keyCode === 13 && val) {
      setNData([...nData, { id: Date.now(), name: val }]);
      setAddValue("");
      setShowAddInput(false);
    }
  }

  function handleRemove(id) {
    setNData(nData.filter((item) => item.id !== id));
  }

  function handleUpdate(id) {
    handleRemove(id);
    setShowUpdate(true);
  }

  function handleUpdateVal(e, val) {
    if (e.keyCode === 13 && val) {
      setNData([{ id: Date.now(), name: val }, ...nData]);
      setShowUpdate(false);
      setUpdateVal("");
    }
  }

  return (
    <div className="ItemLog">
      {showUpdate ? (
        <input
          type="text"
          value={updateVal}
          onChange={(e) => setUpdateVal(e.target.value)}
          autoFocus
          onKeyDown={(e) => handleUpdateVal(e, updateVal)}
        />
      ) : null}
      <ul>
        {nData.map((item) => (
          <li key={item.id} className={item.id % 2 === 0 ? "dark" : "light"}>
            {item.name}
            <div>
              <button onClick={() => handleUpdate(item.id)}>Update</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="btns">
        <button onClick={() => setNData([])}>Clear</button>
        <button onClick={() => setShowAddInput(true)}>Add a Hero</button>
      </div>
      {showAddInput ? (
        <input
          type="text"
          placeholder="add Hero's name"
          value={addValue}
          onChange={(e) => setAddValue(e.target.value)}
          autoFocus
          onBlur={() => setShowAddInput(false)}
          onKeyDown={(e) => handleAddValue(e, addValue)}
        />
      ) : null}
    </div>
  );
};

export default ItemLog;
