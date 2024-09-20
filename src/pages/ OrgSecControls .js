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
  Dropdown,
} from "antd";
import { ReactComponent as AddUserIcon } from "../assets/icons/Add User.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/Search.svg";
import { NavLink } from "react-router-dom";
import face from "../assets/images/face-1.jpg";
import "./ OrgSecControls .css";

import InactiveAccountperiod from "./InactiveAccountperiod";
const { Title } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

function OrgSec() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [activeTab, setActiveTab] = useState("1"); // Assuming you need a state for activeTab

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

  return (
    <>
      <div className="Org-sec">
        <Row gutter={[24, 0]}>
          <Col xs={24} xl={24}>
            <Card
              className="org-card"
              bordered={false}
              style={{ height: "100vh" }}
              title={
                <div className="d-flex justify-content-between flex-wrap  header-custom-1">
                  <h4 className="card-title">Organization Security Controls</h4>
                  <Tabs
                    defaultActiveKey="1"
                    onChange={handleTabChange}
                    className="cust"
                  >
                    <TabPane tab=" Security Controls " key="1" />
                    <TabPane tab="Pass Keys" key="2" />
                    <TabPane tab="IPs" key="3" />
                    <TabPane tab="Security Controls" key="4" />
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
                            Activating this will require all users without a Password to set one before they can access the system again.
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Switch defaultChecked={false} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "2" && (
                  <div>
                    {/* Add content for Pass Keys Tab here */}
                    Pass Keys Tab Content
                  </div>
                )}
                {activeTab === "3" && (
                  <div>
                    {/* Add content for IPs Tab here */}
                    IPs Tab Content
                  </div>
                )}
                {activeTab === "4" && (
                  <div>
                    {/* Add content for Security Controls Tab here */}
                    Security Controls Tab Content
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
