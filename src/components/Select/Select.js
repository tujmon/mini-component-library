import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <IconWrapper style={{"--size": 24 + "px"}}>
        <Icon id="chevron-down" size={24} />
      </IconWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <ShowSelect>
        {displayedValue}
      </ShowSelect>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  position: relative;
  width: max-content;
  height: 43px;
`
const NativeSelect = styled.select`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const ShowSelect = styled.div`
  height: 43px;
  color: #656565;
  background: rgba(128, 128, 128, 0.15);
  line-height: 19px;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus  + &{
    outline: 1px solid #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + &{
    color: #000000;
  }
`



const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 16px;
  margin: auto;
  width: var(--size);
  height: var(--size);
`
export default Select;
