import styled from "styled-components";

export const FormContactContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  @media (max-width: 800px) {
    width: 90%;
    gap: 1.5rem;
  }
  @media (max-width: 500px) {
    width: 80%;
    gap: 1rem;
  }
`;

export const FormContactBox = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  @media (max-width: 500px) {
    gap: 1rem;
  }
`;

export const FormContactTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: white;
  letter-spacing: 1px;
`;

export const FormContactSubtitle = styled.h2`
  font-size: 1.3rem;
  text-align: center;
  color: white;
  letter-spacing: 1px;
`;
export const InputStyle = styled.input`
  background: #f5f5f5;
  border: none;
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
`;

export const TextAreaStyle = styled.textarea`
  background: #f5f5f5;
  border: none;
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
`;

export const ButtonStyle = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-top: 1px solid white;
  color: white;
  font-size: 0.7rem;
  background-color: #131415;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid white;
    box-shadow: inset 0 0 0.2rem white, 0 0 0.5rem white;
  }
`;
