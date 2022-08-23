import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

function CompletedTask() {
  const completedTask = useSelector((state) => state.todos).filter(
    (todo) => todo.completed === true && todo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {completedTask.map((task) => (
        <Todo todo={task} key={task.id} />
      ))}
    </div>
  );
}

export default CompletedTask;
