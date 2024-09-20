import React, { useState } from 'react';
import { Dropdown, Menu, Button, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './InactiveAccountperiod.css';
import { ReactComponent as DdIcon } from "../assets/icons/Arrow - Down Circle.svg";

const InactiveAccountperiod = () => {
  const [selectedOption, setSelectedOption] = useState('Unlimited');
  const [customValue, setCustomValue] = useState('');

  const menu = (
    <Menu
      onClick={(e) => {
        if (e.key !== 'custom') {
          setSelectedOption(e.key);
        }
      }}
      className="custom-dropdown-menu"
    >
     
      <Menu.Divider />
      <Menu.Item key="Unlimited">Unlimited</Menu.Item>
      <Menu.Item key="30 Days">30 Days</Menu.Item>
      <Menu.Item key="60 Days">60 Days</Menu.Item>
      <Menu.Item key="90 Days">90 Days</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} className="custom-dropdown  ">
      <Button className="custom-dropdown-button"    >
        {selectedOption} <DdIcon  className="ml-3  "/>
     
      </Button>
    </Dropdown>
  );
};

export default InactiveAccountperiod;