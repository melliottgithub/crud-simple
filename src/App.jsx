import React from "react";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Crud simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">lista de tareas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Nombre de tarea</span>
              <button className="btn btn-danger btn-sm float-right mx-2">
                Eliminar
              </button>
              <button className="btn btn-warning btn-sm float-right">
                Eliminar
              </button>
            </li>
          </ul>
        </div>
        <div className="col-4">formulario</div>
      </div>
    </div>
  );
}

export default App;
