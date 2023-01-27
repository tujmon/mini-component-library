/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizeStyles = {
  "small": {
    heightBar: "8px",
    paddingContainer: "0px",
    heightContainer: "8px"
  },
  "medium": {
    heightBar: "16px",
    paddingContainer: "0px",
    heightContainer: "16px"
  },
  "large": {
    heightBar: "16px",
    paddingContainer: "4px",
    heightContainer: "24px"
  }
}

const ProgressBar = ({ value, size }) => {
  const barStyle = {
    "--value": value + "%",
    "--height": sizeStyles[size].heightBar
  }
  const containerStyle = {
    "--paddingContainer": sizeStyles[size].paddingContainer,
    "--heightContainer": sizeStyles[size].heightContainer
  }
  return (
    <>
      <ContainerBar style={containerStyle}>
        <Trimmed>
          <Bar style={barStyle}></Bar>
        </Trimmed>
      </ContainerBar>
      <VisuallyHidden>Progress Bar with {value}% filled</VisuallyHidden>
    </>
  )
};

const ContainerBar = styled.div`
  display: flex;
  align-items: center;
  width: 370px;
  height: var(--heightContainer);
  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  padding: var(--paddingContainer);
  border-radius: 16px;
`

const Trimmed = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--value);
  height: var(--height);
  background-color: #4747eb;
`

export default ProgressBar;
