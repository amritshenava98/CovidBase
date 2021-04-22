import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../App.css';

function SearchForm(){
  const [selectedState, setSelectedState] = useState(0);
  
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  }

  const maharashtra = ["", "Mumbai", "Nagpur", "Pune"] 
  const kerala = ["", "Kochi", "Trivandrum", "Kollam", "Kasaragod", "Kottayam", "Pallakad"]

  let options = null;
  let type = null;

  if(selectedState === "Maharashtra"){
    type = maharashtra;
  }
  else if(selectedState === "Kerala"){
    type = kerala;
  }

  if(type){
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return(
    <div className="formDesgin">
      <Form>
        <Form.Group controlId="cbfState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" onChange={handleStateChange}>
            <option></option>
            <option>Delhi</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Maharashtra</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="cbfCity">
          <Form.Label>City</Form.Label>
          <Form.Control as="select">
           {
             options
           }
           {/*<option>Bangalore</option>
            <option>Mangalore</option>
            <option>Udupi</option>
            <option>Puttur</option>
            <option>Mulki</option>
            <option>Karkala</option> */}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="cbfResource">
          <Form.Label>Resource</Form.Label>
          <Form.Control as="select">
            <option></option>
            <option>Beds</option>
            <option>Plasma</option>
            <option>Remdisivir</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchForm;
