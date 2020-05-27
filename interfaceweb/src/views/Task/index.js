import React, { useState, useEffect } from 'react';
import * as S from './styles'

import api from '../../services/api'
//Nossos componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'

import calendarImage from '../../assets/calendarRegister.png'
import clockImage from '../../assets/clockRegister.png'

function Task() {

    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState('4');

    async function lateVerify() {
        await api.get(`/task/filter/late/11-11-11-11-11-11`)
        .then(response => {
            setLateCount(response.data.length);
        })
    }

    useEffect(()=>{
        lateVerify();
    }, [])
    
    return (
        <S.Container lateCount={lateCount}>
            <Header/>

            <S.Form>
                <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index) => (
                            index > 0 && <button type="button" onClick={() => setType(index)}>
                                <img src= {icon} alt="Tipo da tarefa" className={ type && type != index && 'inative'}/>
                            </button>
                        ))
                    }
                </S.TypeIcons>
                
                <S.Input>
                    <span>Título</span>
                    <input type="text" placeholder="Digite o título da tarefa..."/>
                </S.Input>  

                <S.Details>
                    <span>Detalhes</span>
                    <textarea type="textarea" placeholder="Digite os detalhes da tarefa..."  rows={5} />
                </S.Details> 

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Data para a tarefa"/>
                    <img src={calendarImage}></img>
                </S.Input>   

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Hora da tarefa"/>
                    <img src={ clockImage }></img>
                </S.Input>  

            <S.Options>
                <div>
                <input type="checkbox" name="Concluído" id=""/><span>Concluído</span>
                </div>
                <button type="button">Excluir</button>
            </S.Options>

            <S.Send>
                <button type="button">Salvar</button>
            </S.Send>
            </S.Form>

            <Footer/>
        </S.Container>   
    )
}

export default Task;
