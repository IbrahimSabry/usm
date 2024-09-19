import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Avatar,
  Typography,
  Select,
  Space,
  Input,
} from "antd";
import { ReactComponent as AddUserIcon } from "../assets/icons/Add User.svg";
import face from "../assets/images/face-1.jpg";
const { Title } = Typography;
const { Option } = Select;

function InputWithDropdown() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const handleButtonClick = () => {
    console.log(`Input Value: ${inputValue}`);
    console.log(`Selected Option: ${selectedOption}`);
  };

  return (
    <div className="drop-input">
      <Space direction="horzintal" style={{ width: '100%' }} className="space ">
      <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <Select
          style={{ width: '100%' }}
          placeholder="Select an option"
          onChange={handleSelectChange}
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
     
        <Button type="primary" onClick={handleButtonClick} 
         icon={<AddUserIcon />}
        >
          Create
        </Button>
      </Space>
    </div>
  );
}

function Tables() {
  return (
    <>
      <div className="">
        <Row gutter={[24, 0]}>
          <Col xs={24} xl={24}>
            <Card
              bordered={false}
              style={{ height: "100vh" }}
              title="Users List"
            >
              <InputWithDropdown />
              <Row justify="start" align="middle" className=" users-list p-4">
                <Col span={24} md={12} lg={6}>
                  <Card className="m-1">
                    <Avatar.Group>
                      <Avatar size={74} shape="square" src={face} />
                      <div className="avatar-info ml-2">
                        <h4 className="font-semibold m-0">Ezz AboElkheir</h4>
                        <p>UX/UI Designer</p>
                      </div>
                    </Avatar.Group>
                  </Card>
                </Col>
                <Col span={24} md={12} lg={6}>
                  <Card className="m-1">
                    <Avatar.Group>
                      <Avatar size={74} shape="square" src={face} />
                      <div className="avatar-info ml-2">
                        <h4 className="font-semibold m-0">Ezz AboElkheir</h4>
                        <p>UX/UI Designer</p>
                      </div>
                    </Avatar.Group>
                  </Card>
                </Col>
                
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;