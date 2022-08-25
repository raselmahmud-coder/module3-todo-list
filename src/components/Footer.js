import { useDispatch, useSelector } from "react-redux/es/exports";
import { colorChanged, statusChanged } from "./redux/filters/actions";
const taskCounter = (length) => {
  switch (length) {
    case 0:
      return "No task";
    case 1:
      return "1 task";
    default:
      return `${length} tasks`;
  }
};

export default function Footer() {
  const todo = useSelector((state) => state.todo);
  const incomplete = todo.filter((t) => !t.completed).length;
  const filter = useSelector((state) => state.filter);
  console.log(filter);
  const dispatch = useDispatch();
  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChange = (color) => {
    if (filter.colors.includes(color)) {
      dispatch(colorChanged(color, "remove"));
    } else {
      dispatch(colorChanged(color, "add"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{taskCounter(incomplete)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChange("all")}
          className={`cursor-pointer ${
            filter.status === "all" ? "font-bold" : ""
          }`}>
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("incomplete")}
          className={`cursor-pointer ${
            filter.status === "incomplete" ? "font-bold" : ""
          }`}>
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("complete")}
          className={`cursor-pointer ${
            filter.status === "complete" ? "font-bold" : ""
          }`}>
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filter.colors.includes("green") && "bg-green-500"
          }`}></li>
        <li
          onClick={() => handleColorChange("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filter.colors.includes("red") && "bg-red-500"
          }`}></li>
        <li
          onClick={() => handleColorChange("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filter.colors.includes("yellow") && "bg-yellow-500"
          }`}></li>
      </ul>
    </div>
  );
}
