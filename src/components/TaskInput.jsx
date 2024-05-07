import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, fetchTodoData } from "./TaskListSlice";

const TaskInput = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTask({ name: title, description: "Description" }));
      setTitle("");
      setTimeout(() => {
        alert("Task Added..");
        dispatch(fetchTodoData());
      }, 1000);
    } else {
      alert("Title Required..!");
    }
  };
  return (
    <div className="w[100%] h-[100px] mt-[80px] flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3">
      <input
        className="w-[300px] h-[40px] outline-none rounded-lg pl-5 pr-5 placeholder:text-black bg-slate-300"
        type="text"
        placeholder="Add Title here"
        onChange={(e) => setTitle(e.target.value)}
        required
        value={title}
        formAction="submit"
      />
      <button
        className="bg-black text-white pl-5 pr-5 pt-1.5 pb-1.5 hover:bg-cyan-600 rounded-lg"
        onClick={handleAddTodo}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
