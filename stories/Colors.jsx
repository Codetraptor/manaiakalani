import React from 'react';
import styled from 'styled-components';
import colors from '../src/styles/colors';

const ColorStory = () => <div>
  {Object.keys(colors).map((color) =>
    <ColorRow>
      <Column>{color}</Column>
      <Column>{colors[color]}</Column>
      <Column><ColorSwatch bgColor={color} /></Column>
    </ColorRow>
  )}
</div>;

const ColorRow = styled.div`
  padding: 1rem;
  display: flex;

  & :not(:first-of-type) {
    border-top: 1px solid #000;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const ColorSwatch = styled.span`
  height: 1rem;
  width: 1rem;
  border: 1px solid #000;
  background: ${({ bgColor }) => colors[bgColor]};
  display: inline-block;
`

export default ColorStory;
