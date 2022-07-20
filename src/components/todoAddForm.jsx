import React from "react";

const TodoAddForm = ({ handleAddTodo }) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && handleAddTodo(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add_form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add_input"
        placeholder="할 일은?"
      />
      <button className="add_button">+</button>
    </form>
  );
};

export default TodoAddForm;
