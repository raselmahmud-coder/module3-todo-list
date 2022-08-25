import Todo from "./Todo";
import {useSelector} from "react-redux"

export default function TodoList() {
    const todo = useSelector(state => state.todo);
    console.log(todo);
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            <Todo />
        </div>
    );
}