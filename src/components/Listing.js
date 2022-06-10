import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Listing(props){
  return(
    <center>
      <div className="Listing">
        <Link to={`search?info=${props.info}&city=${props.city}&state=${props.state}&resource=${props.resource}`}>
          <h2>{props.info}</h2>
        </Link>
        <h3>City : {props.city}</h3>
        <h3>State : {props.state}</h3>
        <h3>Resource : {props.resource}</h3>
      </div>
    </center>
  );
}


export default Listing;