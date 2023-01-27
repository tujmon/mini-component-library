import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizeStyles = {
  small: {
    size: 16,
    border: '1px',
    font: "14px"
  },
  large: {
    size: 20,
    border: '2px',
    font: '18px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = {
    "--borderSize": sizeStyles[size].border,
    "--font": sizeStyles[size].font,
    "--width": width + "px"
  }
  return (<Container>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Input placeholder={placeholder} style={styles}></Input>
    <IconWrapper>
      <Icon id={icon} size={sizeStyles[size].size}></Icon>
    </IconWrapper>
    </Container>);
};
const Container = styled.div`
  position: relative;
  display: block;
`
const Input = styled.input`
  border: 0px;
  width: var(--width);
  border-bottom: var(--borderSize) solid #000;
  color: ${COLORS.gray700};
  font-size: var(--font);
  padding-left: 30px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-size: var(--font);
  }
  &:hover {
    color: ${COLORS.black};
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left:0;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
`

export default IconInput;
