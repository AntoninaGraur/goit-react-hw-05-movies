import styled from "@emotion/styled";


export const Icon = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/545/545680.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  outline: none;
  cursor: pointer;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;
