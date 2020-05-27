import styled from 'styled-components';

export const Container = styled.div`
    width: 240px;
    height: 190px;
    box-shadow: 0 0 5px rgba(0,0,0, 0.45);
    border-radius: 10px;
    margin: 20px;
    cursor: pointer;

    justify-content: space-between;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;

    

    &:hover{
        opacity: 0.50;
    }

`
export const TopSide = styled.div`

    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
    img{
        width: 85px;
        height: 85px;
        margin-bottom: 10px;
    }
    span{
        font-size: 14px;
        font-weight: bold;
    }
`

export const BotSide = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    font-weight: bold;
    margin-bottom: 5px;
    .TaksDate{
        color: #FFD427;
    }
    .TaskHour{
        color: #707070;
    }
`