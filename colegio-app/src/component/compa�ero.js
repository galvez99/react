import React from 'react';


function Compañero(props){
    const {nombre,asignatura,edad} = props.Compañero
    return(
        <tr>
            <td>{nombre}</td>
            <td>{asignatura}</td>
            <td>{edad}</td>
        </tr>
    )
}
export default Compañero;