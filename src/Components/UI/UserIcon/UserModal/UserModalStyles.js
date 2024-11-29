import styled from "styled-components";
export const UserModalBox = styled.div`
position: absolute;
top: 5rem;
right: 3rem;
background-color: dimgray;
padding: 1rem 2rem;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1rem;
/* border: 1px solid white; */
`;
export const UserModalBoxAdmin = styled.div`
position: absolute;
top: 5rem;
background-color: black;
right: 6rem;
border-radius: 5px;
border-radius: 5px;
padding: 2rem 4rem;
border: 2px solid white;
`;
export const NameUser = styled.span`
text-align: center;
font-size: 20px;
color: white;
font-family: var(--font7);
`;
export const IconBox = styled.span`
width: 55px;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid white;
border-radius: 5%;
img{
    width: 100%;
    border-radius: 5%;
}
`;
export const UserBox = styled.div`
display: flex;
gap: 2rem;
/* background-color: dimgray; */
border-radius: 8px;
padding: .2rem .5rem ;
justify-content: center;
align-items: center;
`;
