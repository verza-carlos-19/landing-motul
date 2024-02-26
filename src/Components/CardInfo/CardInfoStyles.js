import styled from "styled-components";

export const BackBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  --s: 200px; /* control the size */
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
  animation: moveright 14s linear infinite;

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
export const BoxInfo = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* padding: 0; */
  padding: 0 2rem;
  width: 40%;
`;

export const ArticleText = styled.p`
  color: white;
  font-size: 1.5rem;
  filter: drop-shadow(2px 8px 20px black);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
export const TitleText = styled.h2`
  color: white;
  font-size: 3rem;
  margin: 0;
  filter: drop-shadow(2px 8px 20px black);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;
export const PhotoContainerRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  border: 1px solid #f92121;
  background-color: #f92121;
  padding: 1rem 3rem 1rem 0rem;
  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%);
  img {
    width: 75%;
    max-width: 450px;
  }
`;
export const PhotoContainerLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #f92121;
  border: 1px solid #f92121;
  padding: 1rem 0rem 1rem 4rem;
  clip-path: polygon(0% 0, 90% 0%, 100% 100%, 0% 100%);
  img {
    width: 75%;
    max-width: 450px;
  }
`;
