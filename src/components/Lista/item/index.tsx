import { ITarefa } from '../../../types/ITarefa';
import style from '../Lista.module.scss';

export interface Props extends ITarefa {
  selecionaTarefa:  (tarefaSelecionada: ITarefa) =>  void
}

export default function Item(
  {
  tarefa,
  tempo,
  selecionado,
  completado,
  id, 
  selecionaTarefa}:
   Props) { 
  
  return (
    <li className={style.item} 
    onClick={() => selecionaTarefa(
      {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id
      })}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  )
}