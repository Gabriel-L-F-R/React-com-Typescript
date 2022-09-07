import React from "react";
import style from "./Botao.module.scss"

interface props {
    type?: "submit" | "button" | "reset" | undefined,
    children: string,
    onClick?: ()=>void

}

function Botao({type = "button", children, onClick}: props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Botao;