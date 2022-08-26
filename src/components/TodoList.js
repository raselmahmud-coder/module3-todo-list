import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todo = useSelector((state) => state.todo);
  const filters = useSelector((state) => state.filter);
  // filter by status
  const filteredTodo = (todo) => {
    switch (filters.status) {
      case "complete":
        return todo.completed;
      case "incomplete":
        return !todo.completed;
      default:
        return true;
    }
  };
  // filter by color
  const filteredColor = (todo) => {
    if (filters.colors.length === 0) {
      return true;
    }
    return filters.colors.includes(todo?.color);
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todo
        .filter(filteredTodo)
        .filter(filteredColor)
        .map((t) => (
          <Todo key={t.id} {...t} />
        ))}
    </div>
  );
}
