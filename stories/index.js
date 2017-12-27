import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Colors from './Colors';
import Button from './Button';
import Notification from '../src/components/Notification';
import { Label, Form } from '../src/index';

storiesOf('Styles', module)
  .add('Colors', () => <Colors />)
  .add('Typography*', () => <div>Not yet implemented</div>);

storiesOf('Components', module)
  .add('Avatar*', () => <div>Not yet implemented</div>)
  .add('Badge*', () => <div>Not yet implemented</div>)
  .add('Breadcrumb*', () => <div>Not yet implemented</div>)
  .add('Button', () => <Button />)
  .add('Card*', () => <div>Not yet implemented</div>)
  .add('Image*', () => <div>Not yet implemented</div>)
  .add('Label', () => <Label size="small">Hello, world!</Label>)
  .add('List*', () => <div>Not yet implemented</div>)
  .add('Modal*', () => <div>Not yet implemented</div>)
  .add('Notification*', () => <Notification>This is a notification</Notification>)
  .add('Spinner*', () => <div>Not yet implemented</div>)
  .add('Switch*', () => <div>Not yet implemented</div>)
  .add('Tabs*', () => <div>Not yet implemented</div>);

const formSchema = {
  fields: [
    {
      type: 'fieldset'
      ,label: 'Legend'
      ,fields: [{label: 'Input', type: 'text', name: 'input-name', id: 'input-test', value: 'Test'}, {type: 'textarea', rows: 4, cols: 50}]}]
};

storiesOf('Forms', module)
  .add('Form', () => <Form schema={formSchema}>Form</Form>);

storiesOf('Navigation', module)
  .add('Sidebar*', () => <div>Not yet implemented</div>)
  .add('Top*', () => <div>Not yet implemented</div>);

storiesOf('Animation', module)
  .add('Slider*', () => <div>Not yet implemented</div>);
