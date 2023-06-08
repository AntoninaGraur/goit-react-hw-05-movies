import styled from "@emotion/styled";

export const FilmForm = styled.form`
margin-bottom: 75px;
`;

export const Input = styled.input`
border: 2px solid #9E9E9E;
width: 350px;
height: 40px;
border-radius: 24px;
outline: none;
font-size: 16px;
padding:10px;
&::placeholder {
  color: #9E9E9E;
}
`;
export const InputButton = styled.button`
margin-left: 10px;
background-color: #2e818c;
 border: none;
 border-radius: 24px;
 color: black;
 width: 115px;
 height: 40px;
 font-size: 18px;
 cursor: pointer;
 font-weight: 400;
`;