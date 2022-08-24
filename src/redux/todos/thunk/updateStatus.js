import { dbUrl } from "../../../assets/dbUrl";
import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(`${dbUrl}todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(toggled(todo.id));
  };
};

export default updateStatus;
