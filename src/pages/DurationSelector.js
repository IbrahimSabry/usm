import React, { useState } from 'react';

// Dropdown Component
const Dropdown = ({ options, selected, onChange }) => {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

// Main Component
const DurationSelector = () => {
  // State for the number and the unit
  const [number, setNumber] = useState(10); // Default value: 10
  const [unit, setUnit] = useState('Days'); // Default unit: Days

  // Options for the number dropdown
  const numberOptions = Array.from({ length: 31 }, (_, i) => i + 1);

  // Options for the unit dropdown
  const unitOptions = ['Days', 'Weeks', 'Months'];

  return (
    <div style={styles.container}>
      <Dropdown
        options={numberOptions}
        selected={number}
        onChange={setNumber}
      />
      <span style={styles.label}> </span>
      <Dropdown
        options={unitOptions}
        selected={unit}
        onChange={setUnit}
      />
      <span style={styles.label}> {unit}</span>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #A1B1C1',
    borderRadius: '8px',
    padding: '5px',
  },
  label: {
    margin: '0 8px',
  },
};

export default DurationSelector;