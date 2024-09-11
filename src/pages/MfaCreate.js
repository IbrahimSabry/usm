import React, { useState } from "react";
import { ReactComponent as LockIcon } from "../assets/icons/Lock.svg";
import { ReactComponent as SmsIcon } from "../assets/icons/sms.svg";

import { ReactComponent as LogoutIcon } from "../assets/icons/LogOut.svg";
import { ReactComponent as googleAuthIcon } from "../assets/icons/google-authenticator.svg";
import {
  Layout,
  Row,
  Col,
  Typography,
  Modal
} from "antd";
import signinbg from "../assets/images/vr-logo.png";
import qr from "../assets/images/qr/Mask Group 1.png";

import microsoftAuth from "../assets/images/qr/microsoft-authenticator.png";
import LasstPass from "../assets/images/qr/lastpass.png";

import "./MfaCreate.css";

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
            <div data-show="true" className="ant-alert ant-alert-error ant-alert-with-description">
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
              width={800} // Set the width here
            >
              <div
                style={{
                  border: "1px solid #1D3C6E",
                  borderRadius: "6px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
            <Row
        gutter={[24, 0]}
        justify="space-between">

<Col
      
          xs={{ span: 24 }}
          lg={{ span: 8 }}
          md={{ span: 24 }}
        >
<img src={qr} alt="Sign in background" />
<h6>
Scan this QR from your 
authenticator app 
</h6>
        </Col>
        <Col
      
      xs={{ span: 24 }}
      lg={{ span: 16 }}
      md={{ span: 24 }}
    >

      <h6>
      How to use :
      </h6>
      <ul>
        <li>
     Install an authenticator app on your smartphone, such as:
     <div
     className="authen-btn">
    <div className= "apps-link">
  
    <googleAuthIcon/>
    <h6>
      Google<br/>Authenticator
    </h6>
    </div>
    <div>
    <img src={microsoftAuth} alt="google " />
    <h6>
      Microsoft<br></br> Authenticator
    </h6>
    </div>
     </div>
        </li>
      </ul>
    </Col>
        </Row>
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
              <div
                style={{
                  border: "1px solid #1D3C6E",
                  borderRadius: "6px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: "16px" }}>
                    <LockIcon />
                  </div>
                  <div>
                    <h6>SMS Authentication</h6>
                    <p>Receive verification codes via SMS.</p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#52C41A",
                    borderRadius: "4px",
                    padding: "4px 12px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Optional
                </div>
              </div>
            </Modal>
                        {/* logout */}
                        <a className="ant-btn ant-btn-default" href="#"style={{ width: "100%",marginTop:"10px" }}>
<LogoutIcon/>
               Logout
                  </a>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default SignIn;