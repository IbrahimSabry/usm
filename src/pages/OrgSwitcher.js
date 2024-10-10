import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const OrgSwitcher = () => {
  // State to store the selected organization
  const [selectedOrg, setSelectedOrg] = useState('Org 1');

  // Array of organizations with logos
  const organizations = [
    { name: 'Org 1', logo: 'https://via.placeholder.com/20?text=O1' }, // Placeholder logo
    { name: 'Org 2', logo: 'https://via.placeholder.com/20?text=O2' },
    { name: 'Org 3', logo: 'https://via.placeholder.com/20?text=O3' },
    { name: 'Org 4', logo: 'https://via.placeholder.com/20?text=O4' }
  ];

  // Handler for when a new org is selected from the dropdown
  const handleOrgChange = (value) => {
    setSelectedOrg(value);
  };

  return (
    <div style={{ width: 200 }}>
      <Select
        value={selectedOrg}
        onChange={handleOrgChange}
        style={{ width: '100%' }}
      >
        {organizations.map((org, index) => (
          <Option key={index} value={org.name}>
            {/* Logo beside the organization name */}
            <img
              src={org.logo}
              alt={`${org.name} logo`}
              style={{ marginRight: 8, verticalAlign: 'middle' }}
            />
            {org.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default OrgSwitcher;