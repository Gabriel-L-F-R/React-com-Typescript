import React from "react";
import style from "./Formulario.module.scss"
import Botao from "../Botao";


class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}><label htmlFor="tarefa">Adicione om novo estudo</label><input type="text" name="tarefa" id="tarefa" placeholder="O que voce quer estudar" required /></div>
                <div className={style.inputContainer}><label htmlFor="tempo"></label><input type="time" step={1} name="tempo" id="tempo" min={'00:00:01'} max='01:30:00' required/></div>
                <Botao />
            </form>
        )
    }
}

export default Formulario