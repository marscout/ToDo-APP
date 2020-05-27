import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #413A3A;
    border-bottom: 10px solid #FFD427;

    display: flex;
`

export const LeftSide = styled.div`
    width:50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    img{
        width: 110px;
        height: auto;
    }
`

export const RightSide = styled.div`
    width:50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    a{
        color: white;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px; 
    }
    a:hover{
        color: #FFD427;
    }
    #notification{
        img{
            width: 22px;
            height: auto;
        }
        span{
            background: white;
            color: #FFD427;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -17px;
            right: 10px;
        }
        &:hover{
            opacity: 0.5
        }
    }

    button{
        background: none;
        border: none;
        &:focus {outline:0;}
    }

    .dividir::after{
        content:"|";
        margin: 0 10px;
        color: white;
    }
`