import React from 'react';
import styled from 'styled-components';
import { node, bool, string, func } from 'prop-types';

const StyledDiv = styled.div`
  position: relative; 
  margin-bottom: 30px; 
  font-family: ${props => props.theme.fontOne};

  input {
    font-size: 14px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    border-bottom: 1px solid #757575;
    background: none;
    width: ${props => (props.inputWidth && props.inputWidth)};
  }

  input:focus { outline:none; }

  label {
    color: #999; 
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all; 
    -moz-transition: 0.2s ease all; 
    -webkit-transition: 0.2s ease all;
  }

  input:focus ~ label, input:valid ~ label {
    top: -20px;
    font-size: 12px;
    color: ${props => props.theme.secondary};
  }

  .bar { 
    position:relative; 
    display:block; 
    width: ${props => (props.barWidth && props.barWidth)};
  }

  .bar:before, .bar:after {
    content:'';
    height: 2px; 
    width: 0;
    bottom: 1px; 
    position: absolute;
    transition: 0.2s ease all; 
    -moz-transition: 0.2s ease all; 
    -webkit-transition: 0.2s ease all;
    background: ${props => props.theme.secondary}; 
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%; 
  }

  input:focus ~ .bar:before, input:focus ~ .bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%; 
    width: 100px; 
    top: 25%; 
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  input:focus ~ .highlight {
    -webkit-animation:inputHighlighter 0.3s ease;
    -moz-animation:inputHighlighter 0.3s ease;
    animation:inputHighlighter 0.3s ease;
  }

  @-webkit-keyframes inputHighlighter {
    from { background:${props => props.theme.secondary}; }
    to { width:0; background:transparent; }
  }
  @-moz-keyframes inputHighlighter {
    from { background:${props => props.theme.secondary}; }
    to { width:0; background:transparent; }
  }
  @keyframes inputHighlighter {
    from { background:${props => props.theme.secondary}; }
    to { width:0; background:transparent; }
  }
`;

const Input = ({ children, label, type, id, required, inputWidth, barWidth, onChange }) => (
  <StyledDiv
    inputWidth={inputWidth}
    barWidth={barWidth}
  >
    <input
      type={type}
      required={required}
      onChange={onChange}
      id={id}

    />
    <span className="highlight" />
    <span className="bar" />
    <label>{label}</label>
    {children}
  </StyledDiv >
);

Input.propTypes = {
  children: node,
  label: string.isRequired,
  type: string,
  id: string,
  required: bool,
  inputWidth: string,
  barWidth: string,
  onChange: func.isRequired,
};

Input.defaultProps = {
  children: null,
  type: 'text',
  id: '',
  required: false,
  inputWidth: '100px',
  barWidth: '100px',
};

export default Input;
