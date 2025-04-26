import { useReducer, useState } from "react";

const initialState = {
  data: [],
  loading: false,
  error: null,
  showInput: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CLEAR_DATA":
      return {
        ...state,
        data: [],
      };

    case "SHOW_INPUT":
      return {
        ...state,
        showInput: true,
      };
    case "ADD_VALUE":
      return {
        ...state,
        data: [...state.data, { id: Date.now(), title: action.payload }],
      };
    case "HIDE_INPUT":
      return {
        ...state,
        showInput: false,
      };
    case "DELETE_ITEM":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
  }
};

export default function Practice() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("");

  async function fetchData() {
    dispatch({ type: "FETCH_DATA_START" });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  }

  const handleAddValue = (e) => {
    if (e.keyCode === 13 && value) {
      dispatch({ type: "ADD_VALUE", payload: value });
      dispatch({ type: "HIDE_INPUT" });
      setValue("");
    }
  };

  return (
    <div className="wrapper">
      <button onClick={fetchData}>Fetch Data</button>
      {state.loading && <p>Loading please wait....</p>}
      {state.error && <p>Error: {state.error}</p>}
      <ul>
        {state.data.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_ITEM", payload: item.id })
                }
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <div className="btns">
        <button onClick={() => dispatch({ type: "CLEAR_DATA" })}>Clear</button>
        <button onClick={() => dispatch({ type: "SHOW_INPUT" })}>
          Add an element
        </button>
      </div>
      {state.showInput ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="add value"
          autoFocus
          onKeyDown={handleAddValue}
          onBlur={() => {
            dispatch({ type: "HIDE_INPUT" });
            setValue("");
          }}
        />
      ) : null}
    </div>
  );
}
