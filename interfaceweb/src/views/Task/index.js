import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import * as S from './styles';
import {format} from 'date-fns';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';
//Nossos componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'

import calendarImage from '../../assets/calendarRegister.png'
import clockImage from '../../assets/clockRegister.png'

function Task({match}) {

    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState('4');
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [done, setDone] = useState(false);

    async function idInformation(){
        await api.get(`/task/${match.params.id}`)
        .then(response => {
            setType(response.data.type);
            setTitle(response.data.title);
            setDone( response.data.done);
            setDescription(response.data.description);
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
            setHour(format(new Date(response.data.when), 'HH:mm'));
        })
    }

    async function Save() {

        if(!title)
            return alert("Você precisa informar o título da tarefa")
        else if(!description)
            return alert("Você precisa informar a descrição da tarefa")
        else if(!type)
            return alert("Você precisa selecionar o tipo da tarefa")
        else if(!date)
            return alert("Você precisa definir a data da tarefa")
        else if(!hour)
            return alert("Você precisa definir a hora para tarefa")

        if(match.params.id){
            await api.put(`/task/${match.params.id}`,{
                macaddress: isConnected,
                done,
                type,
                title,
                description,
                when:`${date}T${hour}:00.000`
            }).then( () => setRedirect(true))
        }else{
            await api.post(`/task`, {
                macaddress: isConnected,
                type,
                title,
                description,
                when:`${date}T${hour}:00.000`
            }).then( () => setRedirect(true))
        }
    }
    useEffect(()=>{
        if(!isConnected) setRedirect( true )
        idInformation();
    }, [])
    
    async function Remove() {
        const res = window.confirm('Deseja realmente remover a tarefa?')
        if(res == true){
            await api.delete(`/task/${match.params.id}`)
            .then(() => {
                alert('Tarefa removida com sucesso');
                setRedirect(true);
            })
        }else{
            alert('tudo bem, vamos manter')
            return
        }
    }

    return (
        <S.Container>
            { redirect && <Redirect to="/"/>}
            <Header />

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
                    <input type="text" placeholder="Digite o título da tarefa..." onChange={e=>{setTitle(e.target.value)}} value={title}/>
                </S.Input>  

                <S.Details>
                    <span>Detalhes</span>
                    <textarea type="textarea" placeholder="Digite os detalhes da tarefa..."  rows={5} onChange={e=>{setDescription(e.target.value)}} value={description}/>
                </S.Details> 

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Data para a tarefa"onChange={e=>{setDate(e.target.value)}} value={date}/>
                    <img src={calendarImage}></img>
                </S.Input>   

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Hora da tarefa" onChange={e=>{setHour(e.target.value)}} value={hour}/>
                    <img src={ clockImage }></img>
                </S.Input>  

            <S.Options>
                <div>
                <input type="checkbox" name="Concluído" id="" checked={done} onChange={() => setDone(!done)}/><span>CONCLUÍDO</span>
                </div>
                {match.params.id && <button type="button" onClick={Remove}>Excluir</button>}
            </S.Options>

            <S.Send>
                <button type="button" onClick={Save}>Salvar</button>
            </S.Send>
            </S.Form>

            <Footer/>
        </S.Container>   
    )
}

export default Task;
