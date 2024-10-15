import styled from "styled-components";
export const ModalAlertBox = styled.div`

position: fixed;
bottom: 0;
left: 0;
border: 2px solid white;
background-color: black;
border-radius: 5px  ;
width: 300px;
/* height: 50px; */
margin: 3rem 2rem;
opacity: 0;
z-index: 5;
display: flex;
justify-content: center;
/* padding: 0 1rem; */
animation: modalappear 4s ease-in-out 0s 1;
p{
    font-family: var(--font4);
    font-size: 1.3rem;
}
/* &::before{
    content: "";
    background-color: white;
    position: relative;
    width: 100%;
    height: 100%;
    bottom: -5px;
    left: -5px;
    z-index: -2;
} */
 @keyframes modalappear {
     0%{
         transform: translateY(50px) ;
         opacity: 0;
        }
     15%{
         /* transform: translateY(50px) ; */
         opacity: 1;
        }
        20%{
            transform: translateY(0px);
            opacity: 1;
            
        }
        50%{
            transform: translateY(0px);
            opacity: 1;
            
        }
        80%{
            transform: translateY(0px);
            opacity: 1;
            
        }
        100%{
            transform: translateY(-50px);
            opacity: 0;
    }
}
@media (min-width: 1600px) {
    bottom: 0;
    left: 600px;
}
@media (max-width: 600px) {
    bottom: 0;
    left: 0;
    width: 80vw;
}
`;