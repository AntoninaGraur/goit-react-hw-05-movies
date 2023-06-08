import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
export const ContainerHome = styled.div`
  padding:35px;
  padding-top:0;`

export const HomeList = styled.ul`
display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  gap: 25px;
`;
export const FilmTitle = styled.h4`
width: 245px;

`
export const NavWrap = styled.nav`
  display: flex;
  gap: 20px;
  padding: 10px;
`;
export const DirectLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  font-weight: 700;

  &.active {
    color: white;
    background-color: #155d5fd9;
  }
`;