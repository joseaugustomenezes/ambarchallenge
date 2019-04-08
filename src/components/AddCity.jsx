import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const AddCity = ({handleInputChange, addCity, value}) => (
  <div>
    <Input placeholder="Adicionar cidade" value={value} onChange={handleInputChange}/>
    <Button variant="contained" color="primary" onClick={addCity}>
      Add
    </Button>
  </div>
);

export default AddCity;