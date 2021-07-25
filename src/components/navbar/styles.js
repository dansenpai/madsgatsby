import styled from "styled-components";

export const NavbarWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  height: 80px;
  padding: 0 40px;
  margin: 0;

  @media (max-width: 700px) {
    padding: 0 20px;
  }
`;

export const NavbarItem = styled.li``;

export const ItemText = styled.a``;
