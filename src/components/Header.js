import { useState } from "react";
import tickImage from "../assets/images/double-tick.png";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { added, allCompleted, AllClearedComplete } from "./redux/todos/actions";

export default function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };
  const handleAllCompleted = () => {
    dispatch(allCompleted());
  };
  const handleAllRemoved = () => {
    dispatch(AllClearedComplete());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmit}>
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleChange}
          type="text"
          value={input}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={handleAllCompleted}
          className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleAllRemoved}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
