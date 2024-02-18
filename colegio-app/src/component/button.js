import React from "react";

function botonReserva({name, mensaje,style}){
    return (
        <button className={style} onClick={()=> {alert(mensaje)}}>{name}</button>
    )
}
export default botonReserva;