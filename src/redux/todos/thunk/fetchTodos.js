import { dbUrl } from "../../../assets/dbUrl";
import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
  const responseofTodos = await fetch(`${dbUrl}todos`);
  const todos = await responseofTodos.json();

  dispatch(loaded(todos));
};

export default fetchTodos;
