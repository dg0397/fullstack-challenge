import styled from '@emotion/styled'

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width : 1024px){
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80%;
        margin: 0 auto;
    }
`
