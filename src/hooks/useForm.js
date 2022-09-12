import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [inputs,setImputs] =useState(initialState)

    const handleChange = (e) => {
        //destructuramos el e.target para no tener que usar el e.target.name...e.target.value... etc
        const { name, value, checked, type } = e.target;

        //la funcion del estado setTodo recibe los valores previos y los copia para luego modificarlos
        setImputs((prev) => ({
            ...prev,
            //en base a los valores indicamos como tomar los datos
            //name es la propiedad identidicatoria, entonces si name es de tipo type que es checkbox toma el valor checked(como value), sino toma el valor value (de casi todos excepto checked)
            [name]: type === "checkbox" ? checked : value,
        }));
    };

const reset = () => {
    setImputs(initialState)
}

  return [inputs, handleChange,reset]
}
