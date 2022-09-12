import React from "react";
import Swal from "sweetalert2";
import {v4 as uuidv4} from 'uuid';
import { useForm } from "../hooks/useForm";

const Formularios = ({agregarTodo}) => {
    //initialstate se usa para darle un "estado" predeterminado al formulario o aplicacion tomando los datos de "name" y establecemos como por defecto
    const initialState = {
        nombre: "",
        descripcion: "",
        estado: "pendiente",
        prioridad: false,
    };
    //Asignamos el initialState como estado inicial del todo,(significa que cuando se inicie la app tendra valores de initialState)
    //const [todo, setTodo] = useState(initialState);
    const [inputs, handleChange,reset] = useForm(initialState)

    //desatructuramos el todo en base los valores que se van a asignar.
    const { nombre, descripcion, estado, prioridad } = inputs;

    /* const handleChange = (e) => {
        //destructuramos el e.target para no tener que usar el e.target.name...e.target.value... etc
        const { name, value, checked, type } = e.target;

        //la funcion del estado setTodo recibe los valores previos y los copia para luego modificarlos
        setTodo((prev) => ({
            ...prev,
            //en base a los valores indicamos como tomar los datos
            //name es la propiedad identidicatoria, entonces si name es de tipo type que es checkbox toma el valor checked(como value), sino toma el valor value (de casi todos excepto checked)
            [name]: type === "checkbox" ? checked : value,
        }));
    }; */
    //el handleSubmit siempre lleva el evento junto al preventDefault, el submit es quien envia el formulario o objeto
    //las validaciones se dan en el handleSubmit

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            e.target[0].focus();
            return Swal.fire({
              title: "Error!",
              text: "Nombre ogligatorio",
              icon: "error",
            });
        }
        
    
    if (!descripcion.trim()) {
        e.target[1].focus();
         Swal.fire({
            title: "Error!",
            text: "descripcion obligatoria",
            icon: "error",
        });
        return;
    }
    Swal.fire({
      title: "exito",
      text: "Tarea Agregada",
      icon: "success",
    })
    agregarTodo({
      nombre :nombre,
      descripcion :descripcion,
      estado :estado === 'pendiente' ? false :true,
      prioridad : prioridad,
      id: uuidv4()

    })
    //reinicar formulario al enviar con el initialState
    //setTodo(initialState)
    //con hoock propio
    reset();
    
  }
    return (
        <>
            <h3>Agregar Todo</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    name="nombre"
                    placeholder="ingrese TODO nombre"
                    //el value se relaciona con el estado(todo) sino seria todo.nombre
                    value={nombre}
                    onChange={handleChange}
                />
                <textarea
                    placeholder="descripcion"
                    className="form-control
                mb-2"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                />
                <select
                    name="estado"
                    className="form-control mb-2"
                    value={estado}
                    onChange={handleChange}
                >
                    <option value="copmpletado">completado</option>
                    <option value="pendiente">pendiente</option>
                </select>
                <div className="form-check">
                    <input
                        type="checkbox"
                        name="prioridad"
                        id="idCheckbox"
                        className="form-check-input mb-2"
                        checked={prioridad}
                        onChange={handleChange}
                    />
                    <label htmlFor="idCheckbox" className="form-check-label">
                        Dar prioridad
                    </label>
                </div>
                <button type="submit" className="btn btn-primary ">
                    Enviar
                </button>
            </form>
        </>
    );
};

export default Formularios;
