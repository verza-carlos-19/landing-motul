import styled from "styled-components";
export const NavbarBox = styled.nav`
  width: 20%;
  padding-right: 2rem;
`;
export const NavbarList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 1rem;
  list-style: none;
`;
export const ListItem = styled.li`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
