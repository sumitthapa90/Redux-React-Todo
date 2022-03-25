import React, { useState } from "react";

import { addTodo, deleteTodo, clearTodo } from "../action/index";
import { useDispatch } from "react-redux";

const Todo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h1>Add you Todo List</h1>
        </div>

        <input
          type="text"
          placeholder="Enter Your todo"
          value={inputTodo}
          onChange={(event) => setInputTodo(event.target.value)}
        />

        <label onClick={() => dispatch(addTodo(inputTodo))}>
          + Add Your Todo
        </label>
      </div>
    </>
  );
};
export default Todo;
