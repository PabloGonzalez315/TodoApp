import React from "react";

const Todo = ({ todo, eliminarTodo, editarTodo }) => {
    //desatructuramos el todo que llega por props
    const { id, nombre, descripcion, estado, prioridad } = todo;

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? "finalizado" : "pendiente"})
                </div>
                <p>{descripcion}</p>
                <div>
                    <button
                        className="btn btn-danger me-2"
                        onClick={() => eliminarTodo(id)}
                    >
                        eliminar
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => editarTodo(id)}
                    >
                        editar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                {prioridad && "Prioritario"}
            </span>
        </li>
    );
};

export default Todo;
