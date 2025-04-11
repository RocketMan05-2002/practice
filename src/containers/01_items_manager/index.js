import React, { useEffect, useState } from "react";
import datas from "./datas.json";
import "./items.css";

export default function ItemsManager() {
  const [nData, setNData] = useState([]);
  const [adder, setAdder] = useState(false);
  const [addValue, setAddValue] = useState("");
  const [showinput, setShowinput] = useState(false);
  const [changedVal, setChangedVal] = useState("");

  useEffect(() => {
    setNData(datas);
  }, []);

  function handleRemove(id) {
    setNData(nData.filter((item) => item.id !== id));
  }

  function handleSingleEnter(e, value) {
    if (e.keyCode === 13) {
      setNData([...nData, { id: new Date().getTime(), name: value }]);
      setAddValue("");
    }
  }

  function handleUpdate(id) {
    handleRemove(id);
    setShowinput(true);
  }

  function handleUpdateVal(e, value) {
    if (e.keyCode === 13) {
      setNData([...nData, { id: new Date().getTime(), name: value }]);
      setShowinput(false);
      setChangedVal("");
    }
  }

  return (
    <div className="wrapper">
      {showinput ? (
        <input
          type="text"
          placeholder="change name to.."
          value={changedVal}
          onChange={(e) => setChangedVal(e.target.value)}
          autoFocus
          onKeyDown={(e) => handleUpdateVal(e, changedVal)}
        />
      ) : null}
      <ul>
        {nData.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="btns">
        <button onClick={() => setNData([])}>Clear</button>
        <button onClick={() => setAdder(!adder)}>Add a HERO</button>
      </div>
      {adder ? (
        <div className="addItem">
          <input
            type="text"
            value={addValue}
            onChange={(e) => setAddValue(e.target.value)}
            placeholder="enter name of hero"
            autoFocus
            onKeyDown={(e) => handleSingleEnter(e, addValue)}
          />
        </div>
      ) : null}
    </div>
  );
}
