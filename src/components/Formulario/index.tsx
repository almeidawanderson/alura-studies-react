import React from "react";
import Botao from "../botton";
import style from './Formulario.module.scss'

class Formulario extends React.Component {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    addTask(evento: React.FormEvent<HTMLFormElement>) {
       evento.preventDefault();
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="Tarefa">
                        Adicione um novo estudo
                    </label>

                    <input 
                    type="text"
                    name="tarefa"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    required
                    />

                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="Tempo">
                        Tempo
                    </label>
                    <input
                    type="time"
                    step= "1"
                    name="tempo"
                    value={this.state.tempo}
                    // criar uma função e capturar o evento do onChange
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    /> 
                 </div>
                 <Botao>
                    Adicionar
                </Botao>
               
                
            </form>
        )
    }
}

export default Formulario;