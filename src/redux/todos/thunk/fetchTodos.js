import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
  const responseofTodos = await fetch("http://localhost:9000/todos");
  const todos = await responseofTodos.json();

  dispatch(loaded(todos));
};

export default fetchTodos;
