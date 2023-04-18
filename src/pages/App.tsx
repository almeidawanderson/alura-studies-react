import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from './App.module.scss'
import Cronometro from "../components/cronometro";
import { ITarefa } from "../types/ITarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
        <Lista tarefas={selecionaTarefa}/>
      <Cronometro />
      
    </div>
  );
}

export default App;