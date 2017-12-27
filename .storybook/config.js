import { configure } from '@storybook/react';
import './style.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
