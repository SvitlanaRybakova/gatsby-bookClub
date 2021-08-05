import styled from 'styled-components';

export const Input = styled.input`
width: 100%;
display: block;
padding: 8px;
font-size: 20px;
border: 0.5px solid #ddd;
border-radius: 5px;
box-shadow: none;
margin-bottom: 15px;

&:focus, &:active, &:-internal-autofill-selected {
  border: 1px solid rebeccapurple;
}
`;