import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 25px;
  @media (max-width: 600px) {
    column-gap: 30px;
    row-gap: 25px;
    flex-direction: column;
  }
  `;

export const FormBox = styled.div`
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 3px solid var(--white);
  border-top: 3px solid var(--white);
  padding: 70px;
  border-radius: 16px;
  margin: 0 auto;
  /* position: static; */
  background-color: black;
  /* scale: 0.95; */
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
    width: 90%;
  }
`;

export const FormTitle = styled.h2`
  align-self: center;
  font-size: 4rem;
  font-family: var(--font4);
  text-align: center;
  /* font-weight: 700; */
  margin: 0rem 1rem 4rem 1rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
