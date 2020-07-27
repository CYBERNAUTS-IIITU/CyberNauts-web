import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface Props {
  children?: ReactElement | any;
}

const StyledButton = styled.button`
  padding: 0 30px;
  display: block;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  border:none;
  line-height: 60px;
  background: linear-gradient(104deg, #fd9e4c, #f60d45);
  box-shadow: 0 10px 25px 0 rgba(212, 34, 31, 0.3);
  text-transform: uppercase;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 16px;
  /* position: relative; */
  outline: none;
  transition: 1s ease-in-out;

  &:hover {
    background: linear-gradient(104deg, #f60d45, #fd9e4c);
  }
`;

export default function Button({children}: Props): ReactElement {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

