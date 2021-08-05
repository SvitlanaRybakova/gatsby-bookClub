import styled from 'styled-components';

export const Button = styled.button`

padding: 8px 16px;
background: rebeccapurple;
color: white;
font-size: 20px;
border-radius: 4px;
cursor: pointer;
${props => props.block ? 'width: 100%; display: block;' : ''}

&:hover{
  background: indigo;
}
`;