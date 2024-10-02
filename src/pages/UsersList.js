import React, { useState } from "react";
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
  Modal,
  List
} from "antd";
import { ReactComponent as AddUserIcon } from "../assets/icons/Add User.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/Search.svg";
import { ReactComponent as NodataIcon } from "../assets/icons/no data.svg";
import { NavLink } from "react-router-dom";
import face from "../assets/images/face-1.jpg";
import "./UserList.css";
import FormItemLabel from "antd/lib/form/FormItemLabel";

const { Title } = Typography;
const { Option } = Select;

function UserList() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const handleButtonClick = () => {
    console.log(`Input Value: ${inputValue}`);
    console.log(`Selected Option: ${selectedOption}`);
    setIsModalVisible(false); // Close modal after button click
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="user-list">
        <Row gutter={[24, 0]}>
          <Col xs={24} xl={24}>
            <Card
              bordered={false}
              style={{ height: "100vh" }}
              title={
                <div className="d-flex justify-content-between flex-wrap">
                  <h4 className="card-title">Users List</h4>
                 

<Button type="primary" onClick={showModal} icon={<AddUserIcon />}>
                Create User
              </Button>
              {/* Modal Component */}
              <Modal
                title="Create User"
                visible={isModalVisible}
                onOk={handleButtonClick}
                onCancel={handleModalCancel}
                okText="Create"
                cancelText="Cancel"
                className="create-user-modal"
              >
                <Space
                  direction="vertical"
                  style={{ width: "100%" }}
                  className="space form-bg"
                >
              <label>
                Mail ID
              </label>
                  <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter mail ID without @company.com"
                  />
                  <label>
                Mail ID
              </label>
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Select your company Domain"
                    onChange={handleSelectChange}
                  >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                    <Option value="option3">Option 3</Option>
                  </Select>
                </Space>
              </Modal>
                </div>
              }
            >
              <div className="dis-flex justify-content-end"> 
              <Input
                    className="ul-search ml-auto"
                    placeholder="Find User..."
                    prefix={<SearchIcon />}
                  />
              </div>
            
              <Row justify="start" align="middle" className="users-list p-4">
                <Col span={24} md={12} lg={8}>
                  <Card className="m-1">
                    <NavLink to="/user-details">
                      <Avatar.Group>
                        <Avatar size={74} shape="square" src={face} />
                        <div className="avatar-info ml-2">
                          <h4 className="font-semibold m-0">Ezz AboElkheir</h4>
                          <p>UX/UI Designer</p>
                        </div>
                      </Avatar.Group>
                    </NavLink>
                  </Card>
                </Col>
                <Col span={24} md={12} lg={8}>
                  <Card className="m-1">
                    <NavLink to="/user-details">
                      <Avatar.Group>
                        <Avatar size={74} shape="square" src={face} />
                        <div className="avatar-info ml-2">
                          <h4 className="font-semibold m-0">Ezz AboElkheir</h4>
                          <p>UX/UI Designer</p>
                        </div>
                      </Avatar.Group>
                    </NavLink>
                  </Card>
                </Col>
              </Row>
                   {/* no data */}
   <div className="no-data">
      <NodataIcon/>
      <h6 className="text-muted">
        No Data Found
      </h6>
      </div>
  <List>

  </List>

            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserList;