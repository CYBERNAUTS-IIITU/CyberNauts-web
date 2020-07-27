import React from 'react';
import styled from 'styled-components';
const blob =  require('../../images/shape-01.png');

const StyledBlob = styled.div`
  img {
    position: absolute;
    top: 50%;
    left:-450px;
  }
`;

export default function LeftBlob() {
  return (
    <StyledBlob>
        <img src={blob} alt="blob" />
    </StyledBlob>
  )
}
