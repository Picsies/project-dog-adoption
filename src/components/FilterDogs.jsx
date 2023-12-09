import React, { useState } from 'react';

export const FilterDogs = ({ onFilter }) => {
  const [filterSize, setFilterSize] = useState('');

  const handleFilter = () => {
    // Pass the filterSize to the parent component for handling filtering
    onFilter(filterSize.toLowerCase());
  };

  return (
    <div className='row'>
      <div className='col-md-5'>
        <select
          className='form-select mb-3 rounded-5'
          value={filterSize}
          onChange={(e) => setFilterSize(e.target.value)}
        >
          <option value="">Select Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className='col'>
      <button className="btn btn-light mb-5 rounded-5" onClick={handleFilter}>Filter</button>
      </div>
    </div>
  );
};
