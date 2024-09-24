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
  Tabs,
  Switch,
  List,
  Modal,
} from "antd";
import { ReactComponent as AddUserIcon } from "../assets/icons/Add User.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/LogOut.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/Search.svg";
import { ReactComponent as TrashIcon } from "../assets/icons/trash.svg";
import { ReactComponent as NoDataIcon } from "../assets/icons/no sata.svg";
import { ReactComponent as AproveIcon } from "../assets/icons/aprove.svg";
import { NavLink } from "react-router-dom";
import face from "../assets/images/face-1.jpg";
import "./ OrgSecControls .css";
import DurationSelector from "./DurationSelector"; 

import InactiveAccountperiod from "./InactiveAccountperiod";
const { Title } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

function OrgSec() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [activeTab, setActiveTab] = useState("1"); // Active tab state
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state

  // Handlers for state updates
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleButtonClick = () => {
    console.log(`Input Value: ${inputValue}`);
    console.log(`Selected Option: ${selectedOption}`);
  };

  // Show modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Handle "OK" button in modal
  const handleOk = () => {
    setIsModalVisible(false);
    console.log("Item deleted");
    // Add your delete logic here if needed
  };

  // Handle "Cancel" button in modal
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

    const [isDurationVisible, setIsDurationVisible] = useState(false);
  
    // Handler to toggle the visibility
    const toggleDurationVisibility = (checked) => {
      setIsDurationVisible(checked);
    };
  return (
    <>
      <div className="Org-sec">
        <Row gutter={[24, 0]}>
          <Col xs={24} xl={24}>
            <Card
              className="org-card"
              bordered={false}
              title={
                <div className="d-flex justify-content-between flex-wrap  header-custom-1">
                  <h4 className="card-title">Organization Security Controls</h4>
                  <Tabs
                    defaultActiveKey="1"
                    onChange={handleTabChange}
                    className="cust"
                  >
                    <TabPane tab=" Security Controls " key="1" />
                    <TabPane tab="Password Policy " key="2" />
                    <TabPane tab="CIDR" key="3" />
               
                  </Tabs>
                </div>
              }
            >
              <Row justify="start" align="middle" className="users-list p-4">
                {activeTab === "1" && (
                  <div style={{ width: "100%" }}>
                    <div className="sec-card">
                      <div className="header">
                        <h6>Security Controls</h6>
                        <Input
                          className="ul-search mb-1"
                          placeholder="Find ..."
                          prefix={<SearchIcon />}
                        />
                      </div>
                      <div className="sec-list">
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6>Inactive account period</h6>
                            </div>

                            <p className="text-muted">
                              Add the length of time a user account can remain
                              unused before account locking, or deactivation are
                              taken to ensure security and resource efficiency{" "}
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <InactiveAccountperiod />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6>Trusted IP</h6>
                            </div>

                            <p className="text-muted">
                              IP address that is recognized and approved by the
                              system, allowing users to log in{" "}
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6> Must define password</h6>
                            </div>

                            <p className="text-muted">
                              Activating this will require all users without a
                              Password to set one before they can access the
                              system again.
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6> Must define Passkey</h6>
                            </div>

                            <p className="text-muted">
                              Activating this will require all users without a
                              passkey to set one before they can access the
                              system again.{" "}
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6> Must define password/passkey</h6>
                            </div>

                            <p className="text-muted">
                              Activating this will require all users without a
                              passkey or password to set one before they can
                              access the system again.{" "}
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6>
                                {" "}
                                Self login link request disabled upon passkey
                                enablement
                              </h6>
                            </div>

                            <p className="text-muted">
                              If a user has a passkey, they will not be able to
                              use the login link.{" "}
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6> Must define MFA</h6>
                            </div>

                            <p className="text-muted">
                              Users will be required to verify their identity
                              using Multi-Factor Authentication (MFA) after
                              login.
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6> Delete Passkeys</h6>
                            </div>

                            <p className="text-muted">
                              This action will erase all user Passkeys.
                            </p>
                          </div>
                          <Button
                            onClick={showModal}
                            type="primary"
                            danger
                            icon={<TrashIcon className="svg-white" />}
                            style={{
                              marginTop: "10px",
                              display: "block",
                              marginLeft: "auto",
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6> Delete Passwords</h6>
                            </div>

                            <p className="text-muted">
                              This action will erase all user passwords.
                            </p>
                          </div>
                          <Button
                            onClick={showModal}
                            type="primary"
                            danger
                            icon={<TrashIcon className="svg-white" />}
                            style={{
                              marginTop: "10px",
                              display: "block",
                              marginLeft: "auto",
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6> Delete Passwords of Passkeys Users</h6>
                            </div>

                            <p className="text-muted">
                              This action will erase all passwords of all users
                              who have passkeys.
                            </p>
                          </div>
                          <Button
                            onClick={showModal}
                            type="primary"
                            danger
                            icon={<TrashIcon className="svg-white" />}
                            style={{
                              marginTop: "10px",
                              display: "block",
                              marginLeft: "auto",
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6> Delete Passkeys of Passwords Users</h6>
                            </div>

                            <p className="text-muted">
                              This action will erase all Passkeys of all users
                              who have Passwords.
                            </p>
                          </div>
                          <Button
                            onClick={showModal}
                            type="primary"
                            danger
                            icon={<TrashIcon className="svg-white" />}
                            style={{
                              marginTop: "10px",
                              display: "block",
                              marginLeft: "auto",
                            }}
                          >
                            Delete
                          </Button>
                        </div>

                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6>
                            
                                Password based access disabled upon passkey
                                enablement
                              </h6>
                            </div>

                            <p className="text-muted">
                              Users will no longer be able to use passwords to
                              access the system. Instead, they must use their
                              passkeys for authentication.
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6>
                            
                              Adaptive MFA disabled
                              </h6>
                            </div>

                            <p className="text-muted">
                            By activating this, users will have a fixed MFA process instead of the system’s adaptive one.
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6>
                            
                              Passkey based access disabled
                              </h6>
                            </div>

                            <p className="text-muted">
                            By activating this, the system will disable passkey authentication, requiring users to use alternative methods, such as passwords, for access.
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6>
                            
                              password based access disabled
                              </h6>
                            </div>

                            <p className="text-muted">
                            By activating this, the system will disable password authentication, requiring users to use alternative methods, such as passkey, for access.
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6>
                            
                              Allow inactive account to login  
                              </h6>
                            </div>

                            <p className="text-muted">
                            By activating this, the system will Allow inactive account to login .
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6>
                            
                              Global Log out
                              </h6>
                            </div>

                            <p className="text-muted">
                            By activating this, the system will clear all the sessions to sign the user out of all their active sessions.  .
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                          <Button
                          
                            type="secondary"
                            danger
                            icon={<LogoutIcon className="svg-white" />}
                            style={{
                              marginTop: "10px",
                              display: "block",
                              marginLeft: "auto",
                            }}
                          >
                            Global Log out 
                          </Button>
                   
                          </div>
                        </div>
                        <div className="item">
                          <div className="">
                            <div style={{ display: "flex" }}>
                              <h6>
                            
                              Device Grace Period 
                              </h6>
                            </div>

                            <p className="text-muted">
                            By activating this, all devices will require approval  before accessing the system, you can also extend the period till admin approve                            </p>
                          </div>
                          <div style={{ display: "flex",alignItem:"center "}}>
                            {/* Conditional rendering of DurationSelector */}
        {isDurationVisible && <DurationSelector />}
        {/* Switch to toggle visibility */}
                        <Switch 
          defaultChecked={false} 
          onChange={toggleDurationVisibility} 
          className="ml-2 dur-toggle"
        />
                          </div>
                        </div>

                        {/* delete Modal Component */}
                        <Modal
                          title="Delete Confirmation"
                          visible={isModalVisible}
                          onOk={handleButtonClick}
                          onCancel={handleModalCancel}
                          okText="Delete"
                          cancelText="Cancel"
                          okButtonProps={{ danger: true }}
                        >
                          <Space
                            direction="vertical"
                            style={{ width: "100%" }}
                            className="space form-bg"
                          >
                            <h4 className="text-danger">
                              Are you sure you want to delete all passkeys? This
                              action cannot be undone.
                            </h4>
                            <label>Type "delete" to confirm</label>
                            <Input
                              value={inputValue}
                              onChange={handleInputChange}
                              placeholder="type delete"
                            />
                          </Space>
                        </Modal>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "2" && (
                  <div style={{ width: "100%" }}>
                    {/* Add content for Pass Keys Tab here */}
                  
                    <div className="sec-card">
                    <div className="header">
                      <h6>
                      Password Policy 
                      </h6>
                      </div>
                      <Row gutter={[24, 0]}>
                      <Col sm={24} md={8}>
                      <p className="bold">
                      Password Policy Status
                      </p>
                      <p>
                      Example of an accepted password based on the given password policy:
                      </p>
                      <div className="pass-status">
                      <div className="pass-examp">
                        <h3>
                          1234
                        </h3>
                        </div>
                        <div className="no-policy">
<NoDataIcon/>
<h6>
No policy has been configured.
</h6>
<p className="text-muted">
Please add some of password options 
to make password stronger
</p>
                        </div>
                        <div className="with-policy">
                          <div className="item">
                            <p>
                            Minimum Password Length 
                            </p>
                            <AproveIcon/>
                          </div>
                          <div className="item">
                            <p>
                            Capital Letter Requirement
                            </p>
                            <AproveIcon/>
                          </div>
                          <div className="item">
                            <p>
                            Special Characters
                            </p>
                            <AproveIcon/>
                          </div>
                          </div>
                          <div className="pss ">
                            <h6>
                            Password strength status
                            </h6>
                            <div className="dash-holder danger">
                            <div className="dash"></div>
                            <div className="dash"></div>
                            <div className="dash"></div>
                            </div>
                            <div className="dash-holder warning">
                            <div className="dash"></div>
                            <div className="dash"></div>
                            <div className="dash"></div>
                            </div>
                            <div className="dash-holder succsess">
                            <div className="dash"></div>
                            <div className="dash"></div>
                            <div className="dash"></div>
                            </div>
                            <h3 className="mt-3">
                              Strong
                            </h3>
                          </div>

                      </div>
                        </Col>
                        <Col sm={24} md={16}>
                        dd
                        </Col>
                      </Row>

                    </div>
                   
                  </div>
                )}
                {activeTab === "3" && (
                  <div>
                    {/* Add content for IPs Tab here */}
                    IPs Tab Content
                  </div>
                )}
            
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OrgSec;
