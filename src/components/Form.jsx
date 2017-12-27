import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Build Form
  * checkbox
  * date picker
  * file input
*/
const Form = styled.form``;
const Input = styled.input``;
const Textarea = styled.textarea``;
const Label = styled.label``;
const Fieldset = styled.fieldset``;
const Legend = styled.legend``;
const Select = styled.select``;
const Optgroup = styled.optgroup``;
const Option = styled.option``;
const Button = styled.button``;
const Datalist = styled.datalist``;

const ElementSelector = (element) => {
  switch (element.type) {
    case 'fieldset':
      return (
        <fieldset {...element}>
          {element.label && <legend>{element.label}</legend>}{' '}
          {element.fields.map(elem => ElementSelector(elem))}
        </fieldset>
      );
    case 'text':
      return (
        <div>
          {element.label && <label htmlFor={element.id}>{element.label}</label>}
          <input {...element} />
        </div>
      );
    case 'textarea':
      return <textarea {...element} />;
    case 'select':
      return <select />;
    default:
      return '';
  }
};

const FormBuilder = ({ schema }) => (
  <Form>
    {JSON.stringify(schema)}
    {schema.fields.map(element => ElementSelector(element))}
    <Fieldset>
      <Legend>Legend</Legend>
      <Label for="input-test">Input</Label>
      <Input type="text" name="input-name" id="input-test" value="Test" />
      <Textarea rows="4" cols="50" />
      <Select>
        <Optgroup label="Group 1">
          <Option value="A">A</Option>
          <Option value="B">B</Option>
          <Option value="C">C</Option>
        </Optgroup>
        <Optgroup label="Group 2">
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Optgroup>
      </Select>
      <Input list="browsers" />

      <Datalist id="browsers">
        <Option value="Internet Explorer" />
        <Option value="Firefox" />
        <Option value="Chrome" />
        <Option value="Opera" />
        <Option value="Safari" />
      </Datalist>
    </Fieldset>
    <Button type="button">Click Me!</Button>
  </Form>
);

FormBuilder.propTypes = {
  schema: PropTypes.object.isRequired,
};

export default FormBuilder;
