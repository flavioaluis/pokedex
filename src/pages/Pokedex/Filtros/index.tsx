import React from 'react';
import styles from './Filtros.module.scss';
import filtros from './filtros.json';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>

}
export default function Filtros({filtro, setFiltro}:Props) {
  function selecionarFiltro(opcao: IOpcao) {
    if(filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }
  return (
    <div className={styles.filters}>
      {filtros.map(opcao => (
        <button className={classNames({
          [styles.filters__filter]:true,
          [styles['filters__filter--ative']]: filtro === opcao.id
        })} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
          {opcao.label} 
        </button> 
      ))}  
    </div>
  );
}