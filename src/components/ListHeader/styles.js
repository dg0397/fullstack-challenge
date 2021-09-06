import styled from '@emotion/styled'

export const ListHeader = styled.div`
    width: 80%;
    max-width: 500px;
    padding: .5rem;
    margin: 0 auto 1rem auto;
    border-radius: 10px;
    font-size: 1.5rem;
    background-color: ${({ type }) => type === 'Error' ? 'rgb(245, 98, 54)' : type === 'Warning' ? 'rgb(252, 231, 136)' : 'rgb(136, 252, 163)'};

    @media (min-width : 1024px){
        width: 100%;
        background-color: transparent;
    }
`
