import React from 'react';
import { useLocation } from 'react-router-dom';
import Listing from '../components/Listing';

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function SelectedResource(){
  const params = useQuery();
  const info = params.get('info');
  const state = params.get('state');
  const city = params.get('city');
  const resource = params.get('resource');

  return(
    <div className="SelectedResource">
      <Listing info={info} state={state} city={city} resource={resource} />
    </div>
  );
}

export default SelectedResource;