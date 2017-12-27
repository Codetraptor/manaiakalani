import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../styles/colors';

const labelSizes = {
  small: {
    'font-size': '0.75rem',
    'line-height': '0.75rem',
  },
  medium: {
    'font-size': '0.875rem',
    'line-height': '1rem',
  },
  large: {
    'font-size': '1rem',
    'line-height': '1rem',
  },
};

const Label = styled.label`
  color: ${({ color }) => colors[color]};
  display: inline-block;
  font-size: ${({ size }) => labelSizes[size]['font-size']};
  line-height: ${({ size }) => labelSizes[size]['line-height']};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 0.5rem 0;
  text-transform: ${({ textTransform }) => textTransform};
  transition: all 300ms ease;
`;

Label.propTypes = {
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  size: PropTypes.string,
  textTransform: PropTypes.string,
};

Label.defaultProps = {
  color: 'silver',
  fontWeight: 400,
  size: 'medium',
  textTransform: 'uppercase',
};

export default Label;
