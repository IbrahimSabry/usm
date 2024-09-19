import React, { useState } from 'react';
import "./PolicySelector.css";

const PolicySelector = () => {
  const [selectedPolicy, setSelectedPolicy] = useState('Standard');

  return (
    <div style={{ display: 'flex', gap: '10px',flexWrap:'wrap' }}>
      <label>
        <input
          type="radio"
          name="policy"
          value="Standard"
          checked={selectedPolicy === 'Standard'}
          onChange={() => setSelectedPolicy('Standard')}
          style={{ display: 'none' }}
        />
        <div className={`policy-btn ${selectedPolicy === 'Standard' ? 'active' : ''}`}>
          Standard User Policy
        </div>
      </label>

      <label>
        <input
          type="radio"
          name="policy"
          value="Limited"
          checked={selectedPolicy === 'Limited'}
          onChange={() => setSelectedPolicy('Limited')}
          style={{ display: 'none' }}
        />
        <div className={`policy-btn ${selectedPolicy === 'Limited' ? 'active' : ''}`}>
          Limited Access Policy
        </div>
      </label>

      <label>
        <input
          type="radio"
          name="policy"
          value="Admin"
          checked={selectedPolicy === 'Admin'}
          onChange={() => setSelectedPolicy('Admin')}
          style={{ display: 'none' }}
        />
        <div className={`policy-btn ${selectedPolicy === 'Admin' ? 'active' : ''}`}>
          Admin Access Policy
        </div>
      </label>
    </div>
  );
};

export default PolicySelector;