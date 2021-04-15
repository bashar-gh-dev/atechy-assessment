import { useState } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 3.125rem;
  border-radius: 0.3rem;
  background-color: #efefef;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 1.125rem 1rem 0.5rem 1rem;
  outline: none;
  border: 2px solid transparent;
  border-radius: 0.3rem;
  background-color: #efefef;
  font-size: 1rem;
  font-family: Sora, sans-serif, Roboto, Arial;
  font-weight: 400;
  color: #141212;

  :hover {
    border-color: #4b33e1;
  }

  :focus {
    border-color: #4b33e1;
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: calc(1.125rem + 1px);
  left: calc(1rem + 3px);
  font-size: 1rem;
  font-family: Sora, sans-serif, Roboto, Arial;
  font-weight: 400;
  color: #141212;
  transition: all 0.2s;
  user-select: none;

  ${({ value, focus, type }) =>
    value || focus || type === 'date'
      ? `top: 0.25rem;
        color: #4b33e1;
        font-size: 0.75rem;`
      : ''}
`;

const Input = ({ label, value, setValue, type }) => {
  const [state, setState] = useState(false);

  return (
    <StyledLabel>
      <StyledSpan value={value} focus={state} type={type}>
        {label}
      </StyledSpan>
      <StyledInput
        type={type ? type : 'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setState(true)}
        onBlur={() => setState(false)}
      />
    </StyledLabel>
  );
};

export default Input;
