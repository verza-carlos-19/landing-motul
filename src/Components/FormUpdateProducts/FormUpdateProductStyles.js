import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  width: 70%;
  /* background-color: #f4f4f4; */
  border: 2px solid goldenrod;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Buttonn = styled.button`
  border: 1px solid black;
background-color: goldenrod;
color: white;
font-size: 1rem;
padding: .2rem .4rem;
text-transform: capitalize;
font-weight: 700;
font-family: var(--font7);
  cursor: pointer;
  &:hover {
    background-color: goldenrod;
    filter: brightness(0.9);
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
`;
