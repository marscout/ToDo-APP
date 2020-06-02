import React, {useState, useEffect } from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png';
import notification from '../../assets/notification.png';
import { Link, useHistory, } from 'react-router-dom';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';

function Header( { clickNotification } ) {
    const [lateCount, setLateCount] = useState();

    async function lateVerify() {
        await api.get(`/task/filter/late/11-11-11-11-11-11`)
        .then(response => {
            setLateCount(response.data.length);
            console.log(response.data)
        })
    }

    async function RemovelocalStorage() {
        await localStorage.removeItem('@todo/macaddress');
        window.location.reload();
    }

    useEffect(() => {
        lateVerify();
    },)

    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo"/>
            </S.LeftSide>
            <S.RightSide>
                <Link to="/">INÍCIO</Link>
                <span className="dividir"></span>
                <Link to="/task">NOVA TAREFA</Link>
                <span className="dividir"></span>
                {!isConnected ? 
                    <Link to = "/qrcode">SINCRONIZAR CELULAR</Link>
                    :
                    <button type = "button" onClick={RemovelocalStorage}> SAIR</button>
                }
                { lateCount &&
                    <>
                        <span className="dividir"></span>
                        <button id = "notification" onClick = {clickNotification}>
                            <img src={notification}
                                alt="Notificação"></img>
                            <span>{lateCount}</span>
                        </button>
                    </>
                }
            </S.RightSide>
        </S.Container>
    )
}

export default Header;
