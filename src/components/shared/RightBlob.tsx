import React from 'react';
import styled from 'styled-components';
const blob =  require('../../images/shape-01.png');

const StyledBlob = styled.div`
  img {
    position: absolute;
    top: 30%;
    left: 88%;
  }
`;

export default function RightBlob() {
  return (
    <StyledBlob>
        <img src={blob} alt="blob" />
    </StyledBlob>
  )
}
