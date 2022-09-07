import Botao from "../Botao"
import Relogio from "./Relogio"
import style from "./Cronometro.module.scss"
import { convertorHora } from "../../communs/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react"

interface props {
    selecionado: ITarefa | undefined
    finalizar: () => void
}


export default function Cronometro({ selecionado, finalizar }: props) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(convertorHora(selecionado.tempo))
        }
    }, [selecionado])

    function contador(cont= 0){
        setTimeout(()=>{
            if(cont > 0){
                setTempo(cont -1)

                return contador( cont - 1)
            }
            finalizar()
        },1000)
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo ={tempo} />
            </div>
            <Botao onClick={()=>{contador(tempo)
            }}>comecar</Botao>
        </div>
    )
}