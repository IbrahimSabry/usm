import React, { useState } from "react";
import { ReactComponent as LockIcon } from "../assets/icons/Lock.svg";
import { ReactComponent as SmsIcon } from "../assets/icons/sms.svg";
import { ReactComponent as MicrosoftAuthIcon } from "../assets/icons/microsoft-authenticator.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/LogOut.svg";
import { ReactComponent as GoogleAuthIcon } from "../assets/icons/google-authenticator.svg";
import { ReactComponent as AuthyIcon } from "../assets/icons/authy.svg";


import { Layout, Row, Col, Typography, Modal, Input, Form, Button } from "antd";
import signinbg from "../assets/images/vr-logo.png";
import qr from "../assets/images/qr/Mask Group 1.png";

import "./MfaCreate.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const { Title } = Typography;

const SignIn = () => {
  // Modal visibility states for two modals
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  // Show first modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Show second modal
  const showSecondModal = () => {
    setIsSecondModalVisible(true);
  };

  // Handle OK button (Optional) for both modals
  const handleOk = () => {
    setIsModalVisible(false);
    setIsSecondModalVisible(false);
  };

  // Handle Cancel button for both modals
  const handleCancel = () => {
    setIsModalVisible(false);
    setIsSecondModalVisible(false);
  };

  return (
    <Layout className="layout-default layout-mfa-create">
      <Row
        gutter={[24, 0]}
        justify="space-between"
        style={{
          height: "100vh",
          marginLeft: 0,
          marginRight: 0,
        }}
        className="d-unset"
      >
        <Col
          className="sign-img"
          xs={{ span: 24 }}
          lg={{ span: 6 }}
          md={{ span: 24 }}
        >
          <img src={signinbg} alt="Sign in background" />
        </Col>

        <Col
          className="form-container"
          xs={{ span: 24, offset: 0 }}
          lg={{ span: 18 }}
          md={{ span: 24 }}
        >
          <div className="signinform">
            <Title className="" level={3}>
              New MFA
            </Title>
            <Title className="font-regular text-muted" level={5}>
              Welcome Mohamed
            </Title>
            <div
              data-show="true"
              className="ant-alert ant-alert-error ant-alert-with-description"
            >
              <h5 className="ant-alert-message">Alert</h5>
              <span className="ant-alert-description">
                You must add MFA (Multi-factor authentication)
              </span>
            </div>

            {/* First MFA Option */}
            <div onClick={showModal} className="border-div">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "10px" }}>
                  <LockIcon />
                </div>
                <div>
                  <h6>Authenticator App</h6>
                  <p>Use an authenticator app to get a code.</p>
                </div>
              </div>
              <div className="rec-padge">Recommended</div>
            </div>

            {/* First Modal */}
            <Modal
              title="Set up Authenticator App"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              width={800}
            >
              <div
                style={{
                  border: "1px solid #99B1C3",
                  borderRadius: "6px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Row gutter={[24, 0]} justify="space-between">
                  <Col xs={{ span: 24 }} lg={{ span: 8 }} md={{ span: 24 }}>
                    <div className="qr-container text-center">
                      <img src={qr} alt="QR code" />
                      <h6>Scan this QR from your authenticator app</h6>
                    </div>
                  </Col>
                  <Col xs={{ span: 24 }} lg={{ span: 16 }} md={{ span: 24 }}>
                    <h6>How to use :</h6>
                    <ul className="how-to">
                      <li>
                        Install an authenticator app on your smartphone, such
                        as:
                        <div className="authen-btn">
                          <Link className="apps-link">
                            <GoogleAuthIcon />
                            <h6>
                              Google
                              <br />
                              Authenticator
                            </h6>
                          </Link>
                          <Link className="apps-link">
                            <MicrosoftAuthIcon />
                            <h6>
                              Microsoft
                              <br />
                              Authenticator
                            </h6>
                          </Link>
                      
                          <Link className="apps-link">
                          <AuthyIcon/>
                            <h6>
                           Authy
                              <br />
                              Authenticator
                            </h6>
                          </Link>
                        </div>
                      </li>
                      <li>
                        Scan the QR code inside the authenticator app which you
                        installed on your phone.
                      </li>
                      <li>You will get a code in the authenticator app.</li>
                      <li>Enter the code in your account here to verify it.</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              {/* Form to enter 6-digit code */}{" "}
              <div
                style={{
                  border: "1px solid #99B1C3",
                  borderRadius: "6px",
                  padding: "16px",
                }}
              >
                {" "}
                <Row gutter={[24, 0]} justify="space-between">
                  {" "}
                  <Col xs={{ span: 24 }}>
                    {" "}
                    <div>
                      {" "}
                      <Form
                    
                        layout="vertical"
                        className="row-col"
                      >
                        {" "}
                        <Form.Item
                          label="Enter the 6-digit code you see in the app"
                          name="code"
                          rules={[
                            {
                              required: true,
                              message: "Enter the 6-digit code from the app!",
                            },
                          ]}
                        >
                          {" "}
                          <Input placeholder="6-digit code" />{" "}
                        </Form.Item>{" "}
                        <div style={{ display: "flex", justifyContent: "end" }}>
                          {" "}
                          <Form.Item>
                            {" "}
                            <Button
                              type="default"
                              onClick={handleCancel}  
                              style={{ marginRight: 10 }}
                            >
                              {" "}
                              cancel{" "}
                            </Button>{" "}
                          </Form.Item>{" "}
                          <Form.Item>
                            {" "}
                            <Button
                              type="primary"
                              htmlType="submit"
                              style={{ width: "100%" }}
                            >
                              {" "}
                              Verify{" "}
                            </Button>{" "}
                          </Form.Item>{" "}
                        </div>{" "}
                      </Form>{" "}
                    </div>{" "}
                  </Col>{" "}
                </Row>{" "}
              </div>
            </Modal>

            {/* Second MFA Option */}
            <div onClick={showSecondModal} className="border-div">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "10px" }}>
                  <SmsIcon />
                </div>
                <div>
                  <h6>SMS Authentication</h6>
                  <p>Receive verification codes via SMS.</p>
                </div>
              </div>
            </div>

            {/* Second Modal */}
            <Modal
              title="Set up SMS Authentication"
              visible={isSecondModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <Form
                layout="vertical"
                onFinish={(values) => {
                  console.log("SMS Auth values:", values);
                }}
              >
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number!",
                    },
                  ]}
                >
                  <Input
                    placeholder="+203 123 456 78"
                    suffix={
                      <Button type="primary" className="verify-btn">
                        Verify
                      </Button>
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Code"
                  name="code"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the code sent to your phone!",
                    },
                  ]}
                >
                  <Input placeholder="Enter code" />
                </Form.Item>
                <div
                  style={{
                    display: "flex",
                    justifyContent:"end"
                  }}
                >
           <Form.Item>
  <Button
    type="default"
    onClick={handleCancel}  
    style={{ marginRight: 10 }}
  >
    Cancel
  </Button>
</Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </Modal>

            {/* Logout Button */}
            <a
              className="ant-btn ant-btn-default"
              href="#"
              style={{ width: "100%", marginTop: "10px" }}
            >
              <LogoutIcon />
              Logout
            </a>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default SignIn;
