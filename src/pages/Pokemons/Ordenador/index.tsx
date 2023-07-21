import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Ordenador.module.scss';
import options from './options.json';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

interface Props {
    ordenador:string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}
export default function Ordenador({ordenador,setOrdenador}:Props) {

    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && options.find(opcao => opcao.value === ordenador)?.nome;
    return (
    <button className={classNames({
        [styles.sort]:true,
        [styles["sort--ative"]]: ordenador !=="",
    })} 
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}>
        <span>{nomeOrdenador || "Ordenar Por"}</span>
        {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
        <div className={classNames({
            [styles.sort__options]:true,
            [styles["sort__options--ative"]]:aberto,
        })}>
            {options.map(opcao => (
                <div className={styles.sort__option}
                     key={opcao.value}
                     onClick={() => setOrdenador(opcao.value)}>
                    {opcao.nome}
                </div>
        ))}
            
        </div>
    </button>
    )
}