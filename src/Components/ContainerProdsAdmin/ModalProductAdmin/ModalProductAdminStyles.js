import styled from "styled-components"


export const ModalBox = styled.div`
position: fixed;
width: 80vw;
height: 70vh;
top: 0;
right: 0;
left: 0;
bottom: 0;
margin: auto;
background-color: #131415;
/* position: sticky; */
/* z-index: 4; */
display: flex;
&::before{
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    margin: auto;
    left: -10%;
    right: 0;
    width: 200vw;
    height: 100vh;
    backdrop-filter: blur(3px);
}
`;
export const VisualProductBox = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;
`;
export const FormBox = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;
`;
export const ImageBox = styled.div`
width: 200px;
/* border: 1px solid white; */
img{
    width: 100%;
}
`;
export const Title = styled.h2`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.897);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: var(--font7);

  white-space: nowrap;
`;
export const Price = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgba(255, 255, 255);
`;
export const Category = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgba(255, 255, 255);
`;
export const FormUpdate = styled.form`

`;
export const ButtonUpdate = styled.button`
border: 1px solid black;
background-color: goldenrod;
color: white;
font-size: 1rem;
padding: .2rem .4rem;
text-transform: capitalize;
font-weight: 700;
font-family: var(--font7);
`;