import React from "react";
import style from "./Botao.module.scss"


function Botao(props: any) {
    const { type = 'button' } = props
    return (
        <button type={type} className={style.botao}>
            {props.children}
        </button>
    )
}

export default Botao;