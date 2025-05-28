import { useState } from "react";
import data from "./data";
import "./accordian.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelection(id) {
    let cpyMultiple = [...multiple];
    const findIndexOfId = cpyMultiple.indexOf(id);
    if (findIndexOfId === -1) cpyMultiple.push(id);
    else cpyMultiple.splice(findIndexOfId, 1);
    setMultiple(cpyMultiple);
    console.log(cpyMultiple);
  }

  return (
    <div className="accordian__wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "Enable Single Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="accordian__item" key={item.id}>
              <div
                className="accordian__title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="accordian__content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="accordian__content">{item.answer}</div>
                  )}
              {/* {
                        selected === item.id || multiple.indexOf(item.id)!==-1  ? 
                        <div className="accordian__content">
                            {item.answer}
                        </div>
                        :null
                    } */}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
}
