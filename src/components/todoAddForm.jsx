import React from "react";

const TodoAddForm = () => {
  return (
    <form className="add_form">
      <input type="text" className="add_input" placeholder="할 일은?" />
      <button className="add_button">+</button>
    </form>
  );
};

export default TodoAddForm;
