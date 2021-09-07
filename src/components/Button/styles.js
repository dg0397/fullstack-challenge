import styled from '@emotion/styled'

export const Button = styled.button`
    width: ${({ typeBtn }) => typeBtn === 'menu' ? '40%' : '30%'};
    height: ${({ typeBtn }) => typeBtn === 'menu' ? 'auto' : '2.7rem'};
    margin-left: ${({ typeBtn }) => typeBtn === 'notify' ? '.5rem' : '0'};
    border: ${({ typeBtn }) => typeBtn === 'menu' ? 'none' : '1px solid white'};
    margin-right: .5rem;
    padding: .5rem;
    border-radius: 5px;
    font-size: ${({ typeBtn }) => typeBtn === 'menu' ? '1rem' : '.75rem'};
    box-shadow: 0px 1.8px 5px #1c1c1c;
    background-color: ${({ typeBtn }) => typeBtn === 'menu' ? 'rgb(136, 252, 163)' : typeBtn === 'notify' ? 'rgb(244, 67, 54)' : 'transparent'};
    text-transform: uppercase;
    transition: all .25s ease;
    opacity: ${({ typeBtn }) => typeBtn === 'notify' ? '.9' : 'none'};
    color: ${({ typeBtn }) => typeBtn === 'notify' ? 'white' : '#1c1c1c'};
    align-self: flex-end;
    &:hover{
        opacity: .75;
        cursor: pointer;
    }
`
