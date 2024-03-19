import styled from "styled-components";

export const ContainerCategories = styled.section`
  width: 100%;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  animation: moveleft 10s linear infinite;
  box-shadow: inset 0 81px 69px #0d0e0e, inset 0px -51px 23px #0d0e0e,
    inset 0 -64px 69px #0d0e0e, inset 0 145px 69px #0d0e0e;
  justify-content: start;
  --s: 200px;
  --c1: #1d1d1d;
  --c2: #4e4f51;
  --c3: #3c3c3c;

  background: repeating-conic-gradient(
        from 30deg,
        #0000 0 120deg,
        var(--c3) 0 180deg
      )
      calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
    repeating-conic-gradient(
      from 30deg,
      var(--c1) 0 60deg,
      var(--c2) 0 120deg,
      var(--c3) 0 180deg
    );
  background-size: var(--s) calc(var(--s) * 0.577);

  @keyframes moveright {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 200px 0px;
    }
  }
  @keyframes moveleft {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -200px 0px;
    }
  }
`;
export const CategoriesTitle = styled.h2`
  font-size: 3rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`;
export const ContainerCategoriesCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  flex-wrap: wrap;
`;
