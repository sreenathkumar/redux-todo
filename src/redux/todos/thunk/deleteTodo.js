import { dbUrl } from "../../../assets/dbUrl";
import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`${dbUrl}todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
