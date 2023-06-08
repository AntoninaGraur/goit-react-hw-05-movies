import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const CastRewLinks = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  margin-bottom: 15px;

  &.active {
    color: white;
    background-color: #9e9e9e;
  }
`;
export const CastRewList = styled.li`
margin-bottom:15px;`