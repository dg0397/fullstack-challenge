import styled  from "@emotion/styled";
import { keyframes } from "@emotion/react";
const entry = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Message = styled.div`
    display: none;

    @media (min-width : 1024px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;
        margin-bottom: .5rem;
        width: 100%;
        height: 110px;
        border-radius: 5px;
        padding: .5rem;
        animation: ${entry} .75s ease-in;


        background-color: ${({priority}) => priority === 1 ? 'rgb(245, 98, 54)' : priority === 2 ? "rgb(252, 231, 136)" : "rgb(136, 252, 163)"};

    }
`