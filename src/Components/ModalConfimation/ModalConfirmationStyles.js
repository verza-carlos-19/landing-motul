import styled from "styled-components";

export const ModalBox = styled.div`
width: fit-content;
height: 40px;
border: 2px solid white;
backdrop-filter: blur(3px);
background-color:  #000000f6;
position: absolute;
margin: 2rem;
bottom: 0;
left: 0;
padding: 0 2rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
box-shadow: 0 0 0.2rem white;
position: fixed;
animation: modalanimation 5s ease-in-out 0s 1;
/* transform-origin: left; */
p{
    font-size: 16px;
    color: white;
    font-weight: 600;
}

@keyframes modalanimation {
    0%{
        opacity:0;
        transform: translateY(50px);
        /* transform: translateY(00px) scaleX(0); */
        /* transform-origin: left; */
    }
    
    10%{
        opacity:1;
        /* transform: translateY(0px); */
        transform: translateY(0px) scaleX(1);
    }
    50%{
        opacity:1;
        transform: translateY(0px) scaleX(1);
    }
    90%{
        opacity:1;
        transform: translateY(0px) scaleX(1);
        /* transform: translateY(0px); */
    }
    100%{
        opacity:0;
        /* transform: translateY(-0px) scaleX(0); */
        transform: translateY(-50px);
        /* transform-origin: right; */
        
    }
}
`;