 import styled from "styled-components";

// export const Form = styled.form`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   column-gap: 30px;
//   row-gap: 25px;
//   @media (max-width: 600px) {
//     column-gap: 30px;
//     row-gap: 25px;
//     flex-direction: column;
//   }
//   `;

// export const FormBox = styled.div`
//   max-width: 580px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-bottom: 3px solid var(--white);
//   border-top: 3px solid var(--white);
//   padding: 70px;
//   border-radius: 16px;
//   margin: 0 auto;
//   /* position: static; */
//   background-color: black;
//   /* scale: 0.95; */
//   @media (max-width: 600px) {
//     flex-direction: column;
//     padding: 10px;
//     width: 90%;
//   }
// `;

// export const FormTitle = styled.h2`
//   align-self: center;
//   font-size: 4rem;
//   font-family: var(--font4);
//   text-align: center;
//   /* font-weight: 700; */
//   margin: 0rem 1rem 4rem 1rem;
//   @media (max-width: 600px) {
//     font-size: 2rem;
//   }
// `;

export const FormBox = styled.div`
  width: 600px;
    margin: auto;
    background-color: black;
    padding: 2rem;
    border-radius: 5px;
    border: 3px solid white;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
`;
export const ContentBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-family: var(--font7);
`;
export const RegisterSpan = styled.span`
  text-align: center;
  font-size: 1.2rem;
  color: white;
  margin-top: 1rem;
  font-weight: 600;
  font-family: var(--font7);
    /* color: crimson; */
`;
export const RegisterSpanButton = styled.span`
  text-align: center;
  font-size: 1.2rem;
  /* color: white; */
  font-weight: 600;
  font-family: var(--font7);
    color: crimson;
    cursor: pointer;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  width: 80%;
  border: 1px solid white;
  font-size: 1.2rem;
  font-weight: 600;
  background: none;
  border-radius: 4px;
  color :white;
  font-family: var(--font7);
  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: .8rem 2rem;
  background-color: crimson;
  color: white;
  width: fit-content;
  border: 2px solid white;
  border-radius: 4px;
  font-size: 1.2rem;
  font-family: var(--font7);
  cursor: pointer;
  transition: all .2s ease-in;
  
  &:hover {
      background-color: black;
    }
    `;

export const Error = styled.div`
  color: red;
  font-family: var(--font7);
  font-size: 12px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: black;
  padding: 30px;
  border-radius: 5px;
  gap: 1rem;
  width: 400px;
  text-align: center;
  button{
    margin-top: 1rem;
  }
`;
