import styled from 'styled-components'

export const Input = styled.input`
    grid-area: search;
    flex-grow: 2;
    border: none;
    font-size: 1.2rem;
    width: 70%;
    background: none;
    outline: none;
    padding-left: 10px;
`

export const Form = styled.form`
    grid-area: search;
    align-self: start;
    justify-self: center;
    display: flex;
    width: 250px;
    min-height: 30px;
    flex-direction: row;
    border: 2px solid grey;
    padding: 3px;
    border-radius: 20px;
    margin: 30px;
`
export const Button = styled.button`
    border: none;
    outline: none;
    background: #00838f;
    color: white;
    font-size: 1.2rem;
    width: 30%;
    border-radius: 20px;
`

export const Card = styled.div`
    grid-area: main;
    position: relative;
    background-color: white;
    margin: 15px;
    outline: 1px solid black;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    max-width: 90vw;
    display: grid;
    grid-template-columns: 20% 20% auto 20% 15%;
    grid-template-rows: 15% 30% 20% 20% 15%;
`
export const Title = styled.h2`
    color: #000000;
    font-weight: 500;
    font-size: 2rem;
    margin: 5px
`
export const Header = styled.h2`
    grid-area: main;
    color: #000000;
    font-weight: 400;
    font-size: 1.5rem;
`
export const Circle = styled.div`
    background-color: #00838f;
    text-align: center;
    color: #ffffff;
    font-weight: 300;
    margin: 6px 6px;
    min-width: 40px;
    min-height: 40px;
    line-height: 40px;
    border-radius: 50%;
    display: inline-block;
`
export const TextContainer = styled.div`
  padding: 10px;
  justify-items: center;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  text-align: left;
`
export const CircleContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 5;
    justify-items: start;
`
export const Description = styled.p`
    color: #000000;
    font-weight: 300;
    font-size: 1.2rem;
    margin: 10px;
    text-align: left;
`
export const StyledImage = styled.img`
    max-width: 250px;
    max-height: 250px;
    height: auto;
    position: relative;
    grid-column-start: 4;
    margin: 15px;
`

export const Nav = styled.div`
  grid-area: header;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 26px 20px;
  text-align: left;
`
export const Results = styled.div`
  grid-area: main;
`