import React from 'react';
import { Button } from '../src/index';

const ButtonStory = () => <div>
  <div>
    <Button bgColor="green" size="small">small</Button>
  </div>
  <div>
    <Button bgColor="yellow" size="medium">medium</Button>
  </div>
  <div>
    <Button bgColor="orange" size="large">large</Button>
  </div>
  <div>
    <Button size="wide">wide</Button>
  </div>
  <div>
    <Button bgColor="pink" size="extraWide">extra wide</Button>
  </div>
  <div>
    <Button bgColor="purple" size="fullWidth">full width</Button>
  </div>
</div>

export default ButtonStory;
