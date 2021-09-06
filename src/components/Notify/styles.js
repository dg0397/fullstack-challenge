import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const entry = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const out = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`

export const Notify = styled.div`
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    max-width: 350px;
    margin: 0 auto 1rem auto;
    background-color: rgb(244, 67, 54);
    border-radius: 10px;
    padding: 1rem;
    color: white;
    animation: ${({ notify }) => notify ? entry : out} .5s ease-in;

    & p{
        width: 65%;
    }
`
