import styled from "styled-components";

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* align-items: end; */
`;

export const InputLabelStyled = styled.label`
  font-size: 1.1rem;
  font-family: var(--font4);
  
  display: flex;
  /* &:focus{
    font-size: 1.5rem;
    /* color: green; */
    
    `;

export const InputStyled = styled.input`
  border: none;
  border-bottom: 3px solid;
  border-color: ${({ error }) => (error ? "var(--error)" : "var(--white)")};
  /* border-radius: 5px; */
  padding: 10px;
  width: 250px;
  background: transparent;
  color: var(--white);
  outline: none;
  transition: all .5s ease-in-out;
  &:focus{
    /* border-color: green; */
  }
  `;

export const ErrorStyled = styled.span`
font-family: var(--font4);
  padding-left: 5px;
  color: var(--error);
  `;