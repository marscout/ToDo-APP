import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:70px;
    *{
        font-family: 'Roboto';
    }
`

export const Form = styled.div`
    width:50%;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TypeIcons = styled.div`
    width:100%;
    display: flex;
    justify-content: center;

        .inative{
            opacity: 0.5;
        }

    img{
        width:60px;
        height:60px;
        margin:20px;
        transition: all 0.2s ease;
        cursor: pointer;

        &:hover{
            transform: scale(1.4, 1.4);
            margin-left:30px;
            margin-right:30px;
            opacity: 0.5;
        }
        
    }
    button{
        background: none;
        border:  none 0px;
        padding: 0px;

        &:focus {outline:0;}
    }
`
export const Input = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px ;

    input{

        font-size: 18px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #FFD427;
        font-family: 'Roboto'
    }

    input:focus{
        outline: none;
    }
    span{
        color: #707070;
        font-size: 20px;
        margin-bottom: 5px;

    }

    img{
        width: 25px;
        height: auto;
        position: relative;
        left: 90%;
        bottom: 40px;
    }
`
export const Details = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    span{
        color: #707070;
        font-size: 20px;
        margin-bottom: 5px;
    }
    textarea{
        width: auto;
        font-size: 22px;
        font-weight: bold;
        padding: 40px;

        resize: vertical;
        line-height: 24px;

        border: 1px solid #FFD427;
        border-radius: 10px;
        &:focus{
                outline: none;
        }
    }
`


export const Options = styled.div`
    width:100%;
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;

    input{

        font-size: 18px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #FFD427;
        font-family: 'Roboto'
    }

    button{
        background: none;
        border: none;
        font-size: 24px;
        font-weight: bold;
        color: #707070;
        cursor: pointer;
        &:focus {outline:0;}

        &:hover{
            opacity: 0.7;
        }
    }

    div{
        display: flex;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        color: #FFD427; 
    }
`


export const Send = styled.div`
    width:100%;
    margin-top: 10px;
    button{
        width: 100%;
        padding: 20px;
        color: white;
        background: #FFD427;
        border-radius: 30px;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        &:focus {outline:0;}

        &:hover{
            opacity: 0.7;
        }
    }

`