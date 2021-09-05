import styled from "@emotion/styled";

export const MessageList = styled.div`
    @media (min-width : 1024px){
        flex: 1;
        padding-right: 1rem;
        margin-right: 1rem;
        height: 70vh;
        overflow-y: scroll;

        /* width */
        &::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey; 
          border-radius: 5px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: ${({type}) => type === 'Error' ? 'rgb(245, 98, 54)' : type === 'Warning' ? "rgb(252, 231, 136)" : "rgb(136, 252, 163)"}; 
          border-radius: 5px;
        }
        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: ${({type}) => type === 'Error' ? 'rgba(245, 98, 54, 0.75)' : type === 'Warning' ? "rgba(252, 231, 136, 0.75)" : "rgba(136, 252, 163, 0.75)"}; 
        }
    }
`