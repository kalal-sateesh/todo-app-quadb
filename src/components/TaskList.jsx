import { useState } from "react";
import { DeleteTask, fetchTodoData } from "./TaskListSlice";
import { useDispatch, useSelector } from "react-redux";

const TaskList = () => {
  const [priorities, setPriorities] = useState([]);

  const dispatch = useDispatch();

  const { data, isLoading, isError,error } = useSelector(
    (state) => state.TodoList
  );

  const bgColor = (priority) => {
    if (priority === "High") {
      return "rgb(250, 133, 133)";
    } else if (priority === "Medium") {
      return "rgb(237, 255, 71)";
    } else {
      return "";
    }
  };

  const handlePriorityChange = (index, priority) => {
    setPriorities((prevPriorities) => {
      const updatedPriorities = [...prevPriorities];
      updatedPriorities[index] = priority;
      return updatedPriorities;
    });
  };

  const handleDeleteTask = (id) => {
    dispatch(DeleteTask({ id: id }));
    setTimeout(() => {
      alert("Task Deleted..");
      dispatch(fetchTodoData());
    }, 1000);
  };

  const handleViewTask = () => {
    dispatch(fetchTodoData());
  };

  const list = data.map((ele, index) => {
    const priority = priorities[index] || "";
    return (
      <div
        className="lg:w-[50%] md:w-[70%] w-[90%] h-[100px] border-2 border-gray-400 rounded-md flex flex-col sm:flex-row items-center m-auto mt-3 mb-3"
        style={{ backgroundColor: bgColor(priority) }}
        key={index}
      >
        <div className="w-[100%] sm:w-[50%] h-[50%] sm:h-[100%] p-3 box-border flex items-center sm:justify-start justify-center overflow-hidden">
          <span className="text-lg font-bold">Title :</span>
          <span className="ml-2">{ele.name}</span>
        </div>
        <div className="w-[100%] sm:w-[50%] h-[50%] sm:h-[100%] flex justify-evenly items-center">
          <button
            className="pl-3 pr-3 pt-1 pb-1 bg-red-500 rounded-md text-white hover:bg-white hover:text-red-500"
            onClick={() => handleDeleteTask(ele.id)}
          >
            Delete
          </button>
          <select
            className="w-[100px] h-[30px] rounded-md bg-slate-600 text-white cursor-pointer"
            value={priority}
            onChange={(e) => handlePriorityChange(index, e.target.value)}
          >
            <option>Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="w-[100%] h-[50px] flex justify-center items-center">
        <button
          className="pl-4 pr-4 pt-3 pb-3 bg-blue-500 rounded-md text-white hover:bg-white hover:text-blue-500"
          onClick={handleViewTask}
        >
          View Tasks
        </button>
      </div>
      {!isError && !isLoading && (
        <div className="w-[100%] h-[350px] overflow-auto mt-5">{list}</div>
      )}
      {isError && !isLoading && (
        <div className="w-[100%] h-[100px] mt-5 flex justify-center items-center">
          <h1 className="text-red-600 text-3xl">Error {error}</h1>
        </div>
      )}
      {!isError && isLoading && (
        <div className="w-[100%] h-[100px] mt-5 flex justify-center items-center">
          <button
            type="button"
            className="bg-indigo-500 pl-5 pr-5 pt-2 pb-2 text-white rounded-md"
            disabled
          >
            Processing...
          </button>
        </div>
      )}
    </>
  );
};

export default TaskList;
