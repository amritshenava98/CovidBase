import React, {useState } from 'react';
import { Redirect } from 'react-router';
import {db} from '../utils/Firebase';
import 'firebase/database';
import '../App.css';
import { Button, Table } from 'react-bootstrap';

function AdminView(){
  
  const [leads,setLeads] = useState(false);
  const [list,setList] = useState([]);

  const showLeads = ()=>{
    if(!leads){
      db.ref('leads').once('value').then(
        function(snap){
          let result = [];
          const allRecords = snap.val();
          for(const record in allRecords){
            allRecords[record]['id']=record;
          }
          for(const record in allRecords) {
            result.push(allRecords[record]);
          } 
          setList([...result]);
        }
      );
    }
    setLeads(!leads);
  }

  const delet = (something)=>{
    db.ref("leads/"+something).set(null);
    alert("Deleted Successfully");
    window.location.reload();
  }

    return(
      <div>
        {leads? <Table>
          <thead>
            <tr>
              <th>State</th>
              <th>City</th>
              <th>Resource</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((data, index) => 
              {
                return (<tr key={`data-${index}`}>
                  <td>{data.state}</td>
                  <td>{data.city}</td>
                  <td>{data.resource}</td>
                  <td>{data.info}</td>
                  <td><Button onClick={()=>{
                    delet(data.id);
                  }}variant="danger">Delete</Button></td>
                </tr>);
              }
            )
            }
          </tbody>
        </Table>:""}
        {!leads?<div class="flex-2">
          <Button onClick={showLeads}>Show All Leads</Button>
        </div>:""}
      </div>
    );
}

export default AdminView;