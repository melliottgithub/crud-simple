import React, { useState } from "react";
import shortid from "shortid";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  const ids = shortid.generate();

  const addHandler = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Add a task before submitting");
      return;
    }
    setTasks([...tasks, { id: ids, newtask: task }]);
    setTask("");
    setError(null)
  };

  const delHandler = (id) => {
    const arrayFilter = tasks.filter((item) => item.id !== id);
    setTasks(arrayFilter);
  };

  const edithandler = (item) => {
    setEdit(true);
    setTask(item.newtask);
    setId(item.id);
  };

  const editTask = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Add a task before submitting");
      return;
    }
    const arrayEdit = tasks.map((item) =>
      item.id === id ? { id: id, newtask: task } : item
    );
    setTasks(arrayEdit);
    setEdit(false);
    setTask("");
    setId("");
    setError(null)
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Crud simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">{edit ? "Editing list" : "Task list"}</h4>
          <ul className="list-group">
            {tasks.length === 0 ? (
              <list className="list-group-item">No tasks right now</list>
            ) : (
              tasks.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.newtask}</span>
                  <button
                    onClick={() => delHandler(item)}
                    className="btn btn-danger btn-sm float-right mx-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => edithandler(id)}
                    className="btn btn-warning btn-sm float-right"
                  >
                    Edit
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">{edit ? "Edit task" : "Add Task"}</h4>
          <form onSubmit={edit ? editTask : addHandler}>
            {error ? (
              <span className="text-danger">
                Write something before submitting.
              </span>
            ) : null}
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            {edit ? (
              <button className="btn btn-warning btn-block" type="submit">
                Edit
              </button>
            ) : (
              <button className="btn btn-dark btn-block" type="submit">
                Add
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
