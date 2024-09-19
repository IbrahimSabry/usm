import { useState } from "react";
import {
  Row,
  Tabs,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
  Form,
  Modal,
  Input,
  Dropdown,
} from "antd";
import { ReactComponent as LogoutIcon } from "../assets/icons/LogOut.svg";
import { ReactComponent as DeviceIcon } from "../assets/icons/device.svg";
import { ReactComponent as EditIcon } from "../assets/icons/Edit Square.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/Close Square.svg";
import { ReactComponent as AproveIcon } from "../assets/icons/aprove.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/Plus.svg";
import { ReactComponent as IpsIcon } from "../assets/icons/ip.svg";
import { ReactComponent as LockIcon } from "../assets/icons/Lock.svg";
import { ReactComponent as SmsIcon } from "../assets/icons/sms.svg";
import { ReactComponent as UnlockIcon } from "../assets/icons/Unlock.svg";
import { ReactComponent as MicrosoftAuthIcon } from "../assets/icons/microsoft-authenticator.svg";
import { ReactComponent as GoogleAuthIcon } from "../assets/icons/google-authenticator.svg";
import { ReactComponent as PassIcon } from "../assets/icons/password.svg";
import { ReactComponent as DotsIcon } from "../assets/icons/dots.svg";
import { ReactComponent as TrashIcon } from "../assets/icons/trash.svg";
import { ReactComponent as PasskeyIcon } from "../assets/icons/passuser.svg";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import "./Profile.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import BgProfile from "../assets/images/profile-bg.jpg";
import profilavatar from "../assets/images/face-2.jpg";
import convesionImg from "../assets/images/face-3.jpg";
import convesionImg2 from "../assets/images/face-4.jpg";
import convesionImg3 from "../assets/images/face-5.jpeg";
import convesionImg4 from "../assets/images/face-6.jpeg";
import convesionImg5 from "../assets/images/face-2.jpg";
import project1 from "../assets/images/home-decor-1.jpeg";
import project2 from "../assets/images/home-decor-2.jpeg";
import project3 from "../assets/images/home-decor-3.jpeg";
import qr from "../assets/images/qr/Mask Group 1.png";

const { TabPane } = Tabs;

function Profile() {
  const [activeTab, setActiveTab] = useState("1");
  const [imageURL, setImageURL] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageURL(imageUrl);
      });
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showSecondModal = () => {
    setIsSecondModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsSecondModalVisible(false);
  };
  // Handle OK button (Optional) for both modals
  const handleOk = () => {
    setIsModalVisible(false);
    setIsSecondModalVisible(false);
  };
  const handleAddIP = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("New IP Added:", values.ipAddress);
        message.success("IP added successfully!");
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  const overlay = (
    <Card style={{ width: 300, padding: 10 }}>
      <h4>Erase Your data</h4>
      <p>
        It will erase user email, phone number, TOTP secret, Password history,
        passkeys etc.
      </p>
      <Button
        type="primary"
        danger
        icon={<TrashIcon className="svg-white" />}
        style={{ marginTop: "10px", display: "block", marginLeft: "auto" }}
      >
        Delete
      </Button>
    </Card>
  );

  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle">
            <Col span={24} md={12}>
              <Avatar.Group>
                <Avatar size={74} shape="square" src={profilavatar} />
                <div className="avatar-info">
                  <h4 className="font-semibold m-0">Ezz AboElkheir</h4>
                  <p>UX/UI Designer</p>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Dropdown overlay={overlay} trigger={["click"]}>
                <Link type="link">
                  <DotsIcon />
                </Link>
              </Dropdown>
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]} justify="center">
        <Col span={24} md={7} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Profile Information</h6>}
            className="header-solid h-full card-profile-information"
            extra={
              <Link type="link" style={{ color: "#013C68" }}>
                {" "}
                <EditIcon style={{ with: "15px" }} />{" "}
              </Link>
            }
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
              UX/UI designer, passionate about developing outstanding and
              distinctive user experiences through simple and innovative
              designs.{" "}
            </p>
            <hr className="my-25" />
            <Descriptions title="Details">
              <Descriptions.Item label="Full Name" span={3}>
                Ezz Aboelkheir
              </Descriptions.Item>
              <Descriptions.Item label="Mobile" span={3}>
                (+974) 123 456 789
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={3}>
                iz@example.com
              </Descriptions.Item>
              <Descriptions.Item label="Location" span={3}>
                Cairo, Egypt
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        <Col span={24} md={17} className="mb-24">
          <Card
            bordered={false}
            className="header-solid h-full"
            title={
              <Tabs defaultActiveKey="1" onChange={handleTabChange}>
                <TabPane tab="Devices " key="1" />
                <TabPane tab="Password" key="2" />
                <TabPane tab="Pass Keys" key="3" />
                <TabPane tab="IPs" key="4" />
                <TabPane tab="MFA" key="5" />
              </Tabs>
            }
          >
            {activeTab === "1" && (
              <div className="sec-card ">
                <div className="sec-list">
                  <div className="header">
                    <h6>Devices</h6>

                    <Button type="link">Log Out from all devices</Button>
                  </div>
                  <div className="item">
                    <div className="succsess">
                      <div style={{ display: "flex" }}>
                        <DeviceIcon />
                        <h6>Device Name (Trusted)</h6>
                      </div>

                      <p className="text-muted">
                        Added on 23/ 24/ 2023 | Last used on 07/05/2024
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Button type="link">
                        <LogoutIcon />
                      </Button>
                      <Button type="link">
                        <EditIcon />
                      </Button>
                      <Button type="link">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="item">
                    <div className="danger">
                      <div style={{ display: "flex" }}>
                        <DeviceIcon />
                        <h6>Device Name (Rejected )</h6>
                      </div>

                      <p className="text-muted">
                        Added on 23/ 24/ 2023 | Last used on 07/05/2024
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Button type="link">
                        <LogoutIcon />
                      </Button>
                      <Button type="link">
                        <EditIcon />
                      </Button>
                      <Button type="link">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="item">
                    <div className="warning">
                      <div style={{ display: "flex" }}>
                        <DeviceIcon />
                        <h6>
                          Device Name <span> (pending - 7 Days left) </span>
                        </h6>
                      </div>

                      <p className="text-muted">
                        Added on 23/ 24/ 2023 | Last used on 07/05/2024
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Button type="link">
                        <LogoutIcon />
                      </Button>
                      <Button type="link">
                        <EditIcon />
                      </Button>
                      <Button type="link">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="item">
                    <div className="muted">
                      <div style={{ display: "flex" }}>
                        <DeviceIcon />
                        <h6>Device Name (inactive) </h6>
                      </div>

                      <p className="text-muted">
                        Added on 23/ 24/ 2023 | Last used on 07/05/2024
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Button type="link">
                        <AproveIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "2" && (
              <div className="sec-card ">
                <div className="header">
                  <h6> Password</h6>
                </div>
                <div className="sec-list">
                  <div className="item">
                    <div className="">
                      <div style={{ display: "flex" }}>
                        <PassIcon />
                        <h6>* * * *</h6>
                      </div>

                      <p className="text-muted">
                        Added on 23/ 24/ 2023 | Last used on 07/05/2024
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Button type="link " onClick={showModal}>
                        <EditIcon />
                      </Button>
                      <Button type="link">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="item">
                    <div className="">
                      <div style={{ display: "flex" }}>
                        <PassIcon className="svg-muted" />
                        <h6 className="text-muted">No Password found</h6>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Button type="link" onClick={showModal}>
                        <PlusIcon />
                      </Button>
                    </div>
                  </div>
                  {/* Modal for adding new IP */}
                  <Modal
                    title="Change Password"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={[
                      <Button
                        key="discard"
                        onClick={handleCancel}
                        className="ant-btn-muted "
                      >
                        Discard
                      </Button>,
                      <Button key="add" type="primary" onClick={handleAddIP}>
                        Save
                      </Button>,
                    ]}
                  >
                    <Form layout="vertical" className="row-col form-bg">
                      <Form.Item
                        className="username"
                        label="New Password"
                        name="New Password"
                        rules={[
                          {
                            required: true,
                            message: "Please enter new password!",
                          },
                        ]}
                      >
                        <Input placeholder="New Password" />
                      </Form.Item>
                      <Form.Item
                        className="username"
                        label="Confirm Password"
                        name=" Confirm Password"
                        rules={[
                          {
                            required: true,
                            message: "Please conform your password!",
                          },
                        ]}
                      >
                        <Input placeholder="Confirm Password" />
                      </Form.Item>
                    </Form>
                  </Modal>
                </div>
              </div>
            )}

            {activeTab === "3" && (
              <div className="sec-card ">
                <div className="header">
                  <h6>Pass Key</h6>
                  <Button type="link" primary>
                    <PlusIcon />
                    Add New
                  </Button>
                </div>
                <div className="sec-list">
                  <div className="item">
                    <div className="">
                      <div style={{ display: "flex" }}>
                        <PasskeyIcon />
                        <h6>Chrome on Windows</h6>
                      </div>

                      <p className="text-muted">
                        Added on 23/ 24/ 2023 | Last used on 07/05/2024
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Button type="link">
                        <EditIcon />
                      </Button>
                      <Button type="link">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="item">
                    <div className="">
                      <div style={{ display: "flex" }}>
                        <PasskeyIcon />
                        <h6>Safari on Mac</h6>
                      </div>

                      <p className="text-muted">
                        Added on 23/ 24/ 2023 | Last used on 07/05/2024
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Button type="link">
                        <EditIcon />
                      </Button>
                      <Button type="link">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="item">
                    <div className="">
                      <div style={{ display: "flex" }}>
                        <PasskeyIcon className="svg-muted" />
                        <h6 className="text-muted">No passkey Found</h6>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Button type="link">
                        <PlusIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "4" && (
              <>
                {/* ===== */}
                <div className="sec-card ">
                  <div className="header">
                    <h6>IPs</h6>
                    <Button type="link" primary onClick={showModal}>
                      <PlusIcon />
                      Add New
                    </Button>
                  </div>
                  <div className="sec-list">
                    <div className="item">
                      <div className="">
                        <div style={{ display: "flex" }}>
                          <IpsIcon />
                          <h6>105.196.47.40</h6>
                        </div>

                        <p className="text-muted">
                          Added on 23/ 24/ 2023 | Last used on 07/05/2024
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <Button type="link">
                          <EditIcon />
                        </Button>
                        <Button type="link">
                          <DeleteIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ======== */}

                {/* Modal for adding new IP */}
                <Modal
                  title="Add New IP"
                  visible={isModalVisible}
                  onCancel={handleCancel}
                  footer={[
                    <Button
                      key="discard"
                      onClick={handleCancel}
                      className="ant-btn-muted "
                    >
                      Discard
                    </Button>,
                    <Button key="add" type="primary" onClick={handleAddIP}>
                      Add
                    </Button>,
                  ]}
                >
                  <Form
                    form={form}
                    layout="vertical"
                    name="add_ip_form"
                    className="form-bg"
                  >
                    <Form.Item
                      name="ipAddress"
                      label="IP Address"
                      rules={[
                        {
                          required: true,
                          message: "Please enter an IP address!",
                        },
                        {
                          pattern: new RegExp(
                            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
                          ),
                          message: "Please enter a valid IP address!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter new IP" />
                    </Form.Item>
                  </Form>
                </Modal>
              </>
            )}
            {activeTab === "5" && (
              <>
                <div className="sec-card ">
                  <div className="header">
                    <h6>MFA </h6>
                  </div>
                  <div className="sec-list">
                    <div className="item">
                      <div className="">
                        <div style={{ display: "flex" }}>
                          <LockIcon />
                          <h6>Google Authenticator</h6>
                        </div>

                        <p className="text-muted">
                          Added on 23/ 24/ 2023 | Last used on 07/05/2024
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <Button type="link">
                          <DeleteIcon />
                        </Button>
                      </div>
                    </div>
                    <div className="item">
                      <div className="">
                        <div style={{ display: "flex" }}>
                          <SmsIcon />
                          <h6>SMS</h6>
                        </div>

                        <p className="text-muted">
                          Added on 23/ 24/ 2023 | Last used on 07/05/2024
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <Button type="link">
                          <DeleteIcon />
                        </Button>
                      </div>
                    </div>

                    <div className="item">
                      <div className="text-center">
                        <div style={{ display: "flex" }}>
                          <UnlockIcon />
                          <h6 className="text-muted ml-3">No MFA is created</h6>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <Button type="link">
                          <PlusIcon />
                        </Button>
                      </div>
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
                          <Col
                            xs={{ span: 24 }}
                            lg={{ span: 8 }}
                            md={{ span: 24 }}
                          >
                            <div className="qr-container text-center">
                              <img src={qr} alt="QR code" />
                              <h6>Scan this QR from your authenticator app</h6>
                            </div>
                          </Col>
                          <Col
                            xs={{ span: 24 }}
                            lg={{ span: 16 }}
                            md={{ span: 24 }}
                          >
                            <h6>How to use :</h6>
                            <ul className="how-to">
                              <li>
                                Install an authenticator app on your smartphone,
                                such as:
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
                                    <h6>
                                      Any other
                                      <br />
                                      Authenticator
                                    </h6>
                                  </Link>
                                </div>
                              </li>
                              <li>
                                Scan the QR code inside the authenticator app
                                which you installed on your phone.
                              </li>
                              <li>
                                You will get a code in the authenticator app.
                              </li>
                              <li>
                                Enter the code in your account here to verify
                                it.
                              </li>
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
                              <Form layout="vertical" className="row-col">
                                {" "}
                                <Form.Item
                                  label="Enter the 6-digit code you see in the app"
                                  name="code"
                                  rules={[
                                    {
                                      required: true,
                                      message:
                                        "Enter the 6-digit code from the app!",
                                    },
                                  ]}
                                >
                                  {" "}
                                  <Input placeholder="6-digit code" />{" "}
                                </Form.Item>{" "}
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "end",
                                  }}
                                >
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
                              message:
                                "Please enter the code sent to your phone!",
                            },
                          ]}
                        >
                          <Input placeholder="Enter code" />
                        </Form.Item>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "end",
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
                  </div>
                </div>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Profile;
