import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Content = styled.div`
    width: 50%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color: #FFD427;
    }
    p{
        color: #707070;
    }
`
export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ValidationCode = styled.div`
    margin-top: 15px;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        color: #707070;
        font-size: 16px;
    }
    input{
        width: 75%;
        text-align: center;
        font-size: 16px;
        margin-top: 7px;
        margin-bottom: 7px;
        &:focus{
            outline: none;
        }
    }
    button{ 
        width: 50%;
        border: none;
        background:  #FFD427;
        border-radius: 10px;
        color: white;
        height: 30px;
        font-weight: bold;
        font-size: 18px;
        transition: all 0.3s;
        cursor: pointer;
            &:focus{
                outline: none;
            }
            &:hover{
                opacity: 0.6;
                width: 100%;
            }
        }
`