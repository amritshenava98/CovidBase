import React, {useState} from 'react';
import '../App.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { db } from '../utils/Firebase';

function Plasma(){
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedPhone, setSelectedPN] = useState();
  const [selectedEmail, setSelectedEmail] = useState();
  const [selectedName, setSelectedName] = useState();
  const [selectedAge, setSelectedAge] = useState();
  const [selectedBG, setSelectedBG] = useState();

  const [alertshow,setAlertShow] = useState(false);


  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  }
 
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  }

  const handleNameChange = (e) => {
    setSelectedName(e.target.value);
  }
 
  const handlePNChange = (e) => {
    setSelectedPN(e.target.value);
  }

  const handleEmailChange = (e) => {
    setSelectedEmail(e.target.value);
  }
 
  const handleAgeChange = (e) => {
    setSelectedAge(e.target.value);
  }

  const handleBGChange = (e) => {
    setSelectedBG(e.target.value);
  }

  const submitInfo = (e) => {
    e.preventDefault();
    if(selectedName && selectedAge && selectedEmail && selectedPhone && selectedState && selectedCity && selectedBG){
      if(selectedAge>=18 && selectedAge<=45){
        var plasmaRef = db.ref('plasma');
        var plasmaList = {
          name: selectedName,
          age: selectedAge,
          email: selectedEmail,
          phone: selectedPhone,
          state: selectedState,
          city: selectedCity,
          bloodgroup: selectedBG
        };
        plasmaRef.push(plasmaList);
        alert("Successfully submitted!")
        console.log("success");
      }
      else{
        alert("Age Limit Exceeded");
        setSelectedAge("");
      }
    }
    else{
      // return (
      //   <div>
      //   {alertshow? <Alert variant="danger" onClose={() => setAlertShow(false)} dismissible>
      //     <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      //     <p>
      //       Change this and that and try again. Duis mollis, est non commodo
      //       luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
      //       Cras mattis consectetur purus sit amet fermentum.
      //     </p>
      //   </Alert>:""}
      //   </div>
      // );
      alert("All Fields must be Filled");
    }
  };

  const karnataka = ["", "Bangalore", "Hubali","Mangalore", "Udupi", "Puttur", "Karwar", "Manipal", "Karkala", "Kaup"];
  const kerala = ["", "Kochi", "Trivandrum", "Kollam", "Kasaragod", "Kottayam", "Pallakad", ""];

  let options = null;
  let type = null;

  if(selectedState === "Karnataka"){
    type = karnataka;
  }
  else if(selectedState === "Kerala"){
    type = kerala;
  }

  if(type){
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return(
    <div className="Plasma">
      <center>
        <h2>Plasma</h2>
        <p>Register to sign up as a plasma donor with CovidBase.</p>
      </center>
      <Form>
        <Form.Group controlId="cbfpName" onChange={handleNameChange} value={selectedName}>
          <Form.Label>Name <span class="red">*</span></Form.Label>
          <Form.Control type="text">
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="cbfpEmail" onChange={handleEmailChange} value={selectedEmail}>
          <Form.Label>Email Address <span class="red">*</span></Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group controlId="cbfpPhone" onChange={handlePNChange} value={selectedPhone}>
          <Form.Label>Phone Number <span class="red">*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="cbfpState" onChange={handleStateChange}>
          <Form.Label>State <span class="red">*</span></Form.Label>
          <Form.Control as="select" >
            <option></option>
            <option>Karnataka</option>
            <option>Kerala</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="cbfpCity" onChange={handleCityChange}>
          <Form.Label>City <span class="red">*</span></Form.Label>
          <Form.Control as="select" >
            {
              options
            }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="cbfAge" onChange={handleAgeChange}>
          <Form.Label>Age <span class="red">*</span></Form.Label>
          <Form.Control type="number" placeholder="18-45" min="18" max="45"/>
        </Form.Group>
        <Form.Group controlId="cbfpBG" onChange={handleBGChange}>
          <Form.Label>Blood Group <span class="red">*</span></Form.Label>
          <Form.Control as="select">
            <option></option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </Form.Control>
        </Form.Group>
        <br></br>
        <center>
          <Button variant="primary" type="submit" onClick={submitInfo}>
            SUBMIT
          </Button>
        </center>
      </Form>
    </div>
  );
}

export default Plasma;