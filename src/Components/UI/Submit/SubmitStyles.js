import styled from 'styled-components';

export const ButtonSubmitStyled = styled.button`
  background: none;
  padding: .6rem 2rem;
  outline: none;
  border: none;
  border-radius: 8px;
 border-bottom: 2px solid white;
 color: white;
 font-size: 1rem;
 font-weight: 600;
 cursor: pointer;
 transition: all 0.7s ease-in-out;
 font-family: var(--font4);

 &:hover {
   /* background: white; */
   box-shadow: inset 0 -200px 2px -3px white;
    color: black;
    transition: all 0.7s ease-in-out;
  }
`;