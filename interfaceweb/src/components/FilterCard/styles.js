import styled from 'styled-components';

export const Container = styled.div`
    width: 220px;
    height: 50px;
    background: ${props => props.actived ?'#FFD427': '#413A3A'};
    cursor: pointer;

    border-radius: 5px;
    

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: white;
        font-weight:bold;
        align-self:flex-end;
        font-size: 18px;
    }
    &:hover{
        background: #FFD427;
    }

`