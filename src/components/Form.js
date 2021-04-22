import React from 'react';
import { Form } from 'react-bootstrap';

function SearchForm(){
  return(
    <Form>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control as="select">
          <option>Mangalore</option>
          <option>Udupi</option>
          <option>Puttur</option>
          <option>Mulki</option>
          <option>Karkala</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Resource</Form.Label>
        <Form.Control as="select">
          <option>Beds</option>
          <option>Plasma</option>
          <option>Remdisivir</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
