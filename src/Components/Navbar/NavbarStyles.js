import styled from "styled-components";
export const NavbarBox = styled.nav`
  width: 20%;
  padding-right: 2rem;
  transition: all 1s;
  display: flex;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const NavbarBoxRes = styled.nav`
  width: 20%;
  padding-right: 2rem;
  transition: all 1s;
  translate: 0%;
  display: none;
  @media (max-width: 600px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    position: absolute;
    padding-right: 0rem;
    top: 0;
    background: #0d0e0e;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    translate: 100%;
  }
`;
export const NavbarList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 1rem;
  list-style: none;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 4rem;
    list-style: none;
    align-items: center;
    flex-direction: column;
  }
`;
export const ListItem = styled.li`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
export const BurgerOpen = styled.div`
  position: absolute;
  display: none;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 1s;
  .bar {
    width: 100%;
    background-color: white;
    height: 0.2rem;
    transition: all 0.5s;
  }
  @media (max-width: 600px) {
    display: flex;
    top: 1.1rem;
    scale: 0.9;
    z-index: 10;
    left: -6rem;
  }
`;
export const BurgerClose = styled.div`
  position: absolute;
  display: none;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 1s;
  .bar {
    width: 100%;
    background-color: white;
    height: 0.2rem;
    transition: all 0.5s;
  }
  .leftBar {
    transform: rotate(45deg) translateX(7px);
  }
  .rightBar {
    transform: rotate(-45deg) translateX(8px);
  }

  @media (max-width: 600px) {
    display: flex;
    top: 1.1rem;
    scale: 0.9;
    z-index: 10;
    right: 2rem;
  }
`;
