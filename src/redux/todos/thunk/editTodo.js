import { updateTodo } from "../actions";

const editTodo = (inputValue, todoId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: inputValue,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();
    dispatch(updateTodo(todo));
  };
};

export default editTodo;
