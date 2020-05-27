import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
    padding-bottom:60px;
    button{
        background: none;
        border: none;
    }
`

export const TaskCardArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #413A3A;
    display: flex;
    justify-content: center;
    h3{
        color: #413A3A;
        font-family:Arial;
        font-size: 18px;
        position: relative;
        top: 30px;
        background: white;
        padding: 0 20px;

    }
`