import Botao from "../botton";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'

export default function Cronometro(){
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um card e inicie o Cronometro
        <div className={style.relogioWrapper}>
          < Relogio />
        </div>
        <Botao>
          Comecar!
        </Botao>
      </p>
    </div>
    
  )
}