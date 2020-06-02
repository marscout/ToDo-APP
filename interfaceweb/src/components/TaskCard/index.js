import React, { useMemo } from 'react';
import { format } from 'date-fns'
import * as S from './styles';
import sportImg from '../../assets/sport.png'
import typeIcons from '../../utils/typeIcons'


function TaskCard({type, title, when, done}) {
    const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy') );
    const hour = useMemo(() => format(new Date(when), 'HH:mm') );
    return (
        <S.Container done = {done} >
            <S.TopSide>
                <img src={typeIcons[type]}/>
                <span className="TaskName">{title}</span>
            </S.TopSide>
            <S.BotSide>
                <span className="TaksDate">{date}</span>
                <span className="TaskHour">{hour}</span>
                <span></span>
            </S.BotSide>
        </S.Container>
    )
}

export default TaskCard;
