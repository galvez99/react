import React from 'react';


function Profesores(props){
    const {nombre,especialidad,edad} = props.Profesores 
    return(
        <tr>
            <td>{nombre}</td>
            <td>{especialidad}</td>
            <td>{edad}</td>
        </tr>
    )
}
export default Profesores;