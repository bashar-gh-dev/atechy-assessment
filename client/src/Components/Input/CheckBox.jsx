import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledLabel = styled.label`
  display: inline-block;
  position: relative;
  margin-right: 1rem;
  margin-buttom: 1rem;
  user-select: none;
`;

const StyledCheckBox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 1.125rem;
  width: 1.125rem;
  background-color: #efefef;
  background-image: none;
  border-radius: 0.3rem;

  :after {
    content: '';
    position: absolute;
    display: none;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const StyledInput = styled.input`
  display: inline-block;
  opacity: 0;
  height: 0;
  width: 0;

  :checked + ${StyledCheckBox} {
    background-color: transparent;
    background-image: linear-gradient(110deg, #4734e1 0%, #8e27ea 100%);
  }

  :checked + ${StyledCheckBox}:after {
    display: block;
  }
`;

const StyledSpan = styled.span`
  margin-left: 1.5rem;
  font-size: 1rem;
  font-family: Sora, sans-serif, Roboto, Arial;
  font-weight: 400;
  color: #141212;
`;

const Input = ({ value, options, setValue }) => {
  return (
    <>
      {options.map((option) => (
        <StyledLabel key={uuidv4()}>
          <StyledInput
            type='checkbox'
            checked={value === option ? true : false}
            onChange={() => {
              setValue(option);
            }}
          ></StyledInput>
          <StyledCheckBox />
          <StyledSpan>{option}</StyledSpan>
        </StyledLabel>
      ))}
    </>
  );
};

export default Input;
