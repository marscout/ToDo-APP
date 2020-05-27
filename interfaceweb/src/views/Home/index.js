import React, { useState, useEffect } from 'react';
import * as S from './styles'

import api from '../../services/api'
//Nossos componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'


function Home() {
    const [filterActived, setFilterActived] = useState();
    const [tasks, setTasks] = useState([]);
    const [lateCount, setLateCount] = useState();

    async function loadTasks() {
        await api.get(`/task/filter/${filterActived}/11-11-11-11-11-11`)
        .then(response => {
            setTasks(response.data);
            console.log(response.data)
        })
    }

    async function lateVerify() {
        await api.get(`/task/filter/late/11-11-11-11-11-11`)
        .then(response => {
            setLateCount(response.data.length);
            console.log(response.data)
        })
    }

    function Notification() {
        setFilterActived('late')
    }
    
    useEffect(()=>{
        loadTasks();
        lateVerify();
    }, [filterActived])
    return (
        <S.Container>
            <Header lateCount={lateCount} clickNotification={Notification} />
                <S.FilterArea>
                    <button type="button" onClick={() => setFilterActived("all")}>
                    <FilterCard tittle="Todos" actived = {filterActived == 'all'}/>
                    </button>

                    <button type="button" onClick={() => setFilterActived("today")}>
                    <FilterCard tittle="Hoje" actived = {filterActived == 'today'}/>
                    </button>

                    <button type="button" onClick={() => setFilterActived("weak")}>
                    <FilterCard tittle="Semana" actived = {filterActived == 'weak'}/>
                    </button>

                    <button type="button" onClick={() => setFilterActived("month")}>
                    <FilterCard tittle="Mês" actived = {filterActived == 'month'}/>
                    </button>

                    <button type="button" onClick={() => setFilterActived("year")}>
                    <FilterCard tittle="Ano" actived = {filterActived == 'year'}/>
                    </button>
                </S.FilterArea>

                <S.Title>
                    <h3>{ filterActived == 'late'? 'TAREFAS ATRASADAS': 'TAREFAS'}</h3>
                </S.Title>

                <S.TaskCardArea>
                    {
                        tasks.map(t => (
                            <TaskCard type={t.type} title={ t.title } when={ t.when }/>
                        ))
                    }
                    
                </S.TaskCardArea>

            <Footer/>
        </S.Container>   
    )
}

export default Home;
