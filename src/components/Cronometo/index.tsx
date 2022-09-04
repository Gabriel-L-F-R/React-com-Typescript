import Botao from "../Botao"
import Relogio from "./Relogio"
import style from "./Cronometro.module.scss"
import { convertorHora } from "../../communs/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useState } from "react"

interface props {
    selecionado: ITarefa | undefined
}

export default function Cronometro(selecionado: props) {
    const [tempo, setTempo] = useState<number>()
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>comecar</Botao>
        </div>
    )
}