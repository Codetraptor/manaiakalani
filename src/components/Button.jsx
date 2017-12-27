import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import colors from '../styles/colors';

const buttonSizes = {
  small: {
    'font-size': '0.875rem',
    'line-height': '1.875rem',
    padding: '0 0.5rem',
  },
  medium: {
    'font-size': '1rem',
    'line-height': '2.5rem',
    padding: '0 0.75rem',
  },
  large: {
    'font-size': '1.125rem',
    'line-height': '3.125rem',
    padding: '0 1rem',
  },
  wide: {
    'font-size': '1rem',
    'line-height': '2.5rem',
    padding: '0 2.25rem',
  },
  extraWide: {
    'font-size': '1rem',
    'line-height': '2.5rem',
    padding: '0 4.5rem',
  },
  fullWidth: {
    'font-size': '1rem',
    'line-height': '2.5rem',
    padding: '0 0.5rem',
  },
};

function setDisplay({ size }) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}

function setWidth({ size }) {
  return size === 'fullWidth' ? '100%' : 'initial';
}

const Button = styled.button`
  background: ${({ bgColor }) => colors[bgColor]};
  border: none;
  border-radius: 0.125rem;
  color: ${({ fontColor }) => colors[fontColor]};
  cursor: pointer;
  display: ${setDisplay};
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  line-height: ${({ size }) => buttonSizes[size]['line-height']};
  font-weight: 200;
  margin: 0.5rem 0;
  outline: none;
  padding: ${({ size }) => buttonSizes[size].padding};
  width: ${setWidth};
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: ${({ bgColor }) => darken(0.1, colors[bgColor])};
  }
`;

Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  size: 'medium',
};

export default Button;
