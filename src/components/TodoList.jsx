import React, { useEffect, useState } from "react";
import Formularios from "./Formularios";
import Todo from "./Todo";

const TodoList = () => {
    //usamos usestate para llamar y listar los todos nuevos, en forma de array
    const [todos, setTodos] = useState([]);

    useEffect(() => {
    if(localStorage.getItem('todos')){
        setTodos(JSON.parse(localStorage.getItem('todos')))
    }
    },[])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const agregarTodo = (todo) => {
        console.log(todo);
        setTodos((prev) => [...prev, todo]);
    };
//los metodos se usan siempre donde se define el agregar.
const eliminarTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
};

const editarTodo = (id) => {
    const editarTodos = todos.map(item => (
        item.id === id ? {...item, estado: !item.estado} :item
    ))

    setTodos(editarTodos)
}

    return (
        <>
            TodoList
            <Formularios agregarTodo={agregarTodo} />
            <ul className="list-group list-group-numbered mt-2">
                {todos.map((item) => (
                    <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>
                ))}
            </ul>
        </>
    );
};

export default TodoList;
