import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 230px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(15, 15, 15);
  border: 3px solid #f92121;
  color: white;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
  position: relative;
  overflow: hidden;
  transition-duration: 1s;

  &::before {
    width: 224px;
    height: 230px;
    position: absolute;
    content: "";
    background-color: white;
    border-radius: 50%;
    left: -100%;
    top: 0;
    transition-duration: 0.3s;
    mix-blend-mode: difference;
  }

  &:hover::before {
    transition-duration: 0.3s;
    transform: translate(100%, -50%);
    border-radius: 0;
  }

  &:active {
    transform: translate(5px, 5px);
    transition-duration: 0.3s;
  }
`;
