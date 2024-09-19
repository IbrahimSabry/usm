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
  Dropdown
 
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
import { ReactComponent as UnlockIcon } from "../assets/icons/Unlock.svg"
import { ReactComponent as MicrosoftAuthIcon } from "../assets/icons/microsoft-authenticator.svg";
import { ReactComponent as GoogleAuthIcon } from "../assets/icons/google-authenticator.svg";
import { ReactComponent as PassIcon } from "../assets/icons/password.svg";
import { ReactComponent as DotsIcon } from "../assets/icons/dots.svg";
import { ReactComponent as TrashIcon } from "../assets/icons/trash.svg";
import { ReactComponent as PasskeyIcon } from "../assets/icons/passuser.svg";
import { ReactComponent as AttachyIcon } from "../assets/icons/attach.svg";
import { ReactComponent as RedoIcon } from "../assets/icons/redo.svg";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import "./Profile.css";
import PolicySelector from "./PolicySelector"; 
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

  const handleCancel = () => {
    setIsModalVisible(false);
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
    <Card style={{ width: 300 ,padding:10}}>
      <div className="mb-3">
      <h4>Erase User data</h4>
      <p>
        It will erase user email, phone number, TOTP secret, Password history,
        passkeys etc.
      </p>
      <Button
        type="primary"
        danger
        icon={<TrashIcon className="svg-white"/>}
        style={{ marginTop: "10px" ,display:"block",marginLeft:"auto"}}
      >
        Delete
      </Button>
      </div>
      <div className="mb-3">
      <h4>Reinstate user</h4>
      <p>
      It will restore user email, phone number, TOTP secret, Password history, passkeys etc.
      </p>
      <Button
        type="primary"
      
        icon={<RedoIcon className="svg-white"/>}
        style={{ marginTop: "10px" ,display:"block",marginLeft:"auto"}}
      >
        Reinstate
      </Button>
      </div>
  
    </Card>)

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
                 <Dropdown overlay={overlay} trigger={['click']}>
      <Link type="link" >
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
            extra={<Link type="link" style={{color:"#013C68"}}> <EditIcon style={{with:"15px"}}/> </Link>}
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
            UX/UI designer, passionate about developing outstanding and distinctive user experiences through simple and innovative designs.            </p>
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
           
                <TabPane tab="Pass Keys" key="2" />
                <TabPane tab="IPs" key="3" />
                <TabPane tab="Security Controls " key="4" />
        
              </Tabs>
            }
          >
                {activeTab === "1" && (
                      <div className="sec-card ">
   <div className="sec-list">
               <div className="header">
                 <h6>Devices</h6>
                 <Button type="link" >
              
               Log Out from all devices
             </Button>
               </div>
               <div className="item">
               <div className="warning">
                 <div style={{ display: "flex" }}>
                   <DeviceIcon />
                   <h6>Device Name <span> (pending - 7 Days left) </span></h6>
                 </div>

                 <p className="text-muted">
                   Added on 23/ 24/ 2023 | Last used on 07/05/2024
                 </p>
               </div>
               <div className="dis-flex"> 
               <Button
        type="primary"
        danger
        icon={<DeleteIcon className="svg-white"/>}
        style={{paddingRight:6,paddingLeft:6,marginRight:10}}
      >
        Deny
      </Button>
      <Button
      type="success"
        icon={<AproveIcon className="svg-white"/>}
        style={{paddingRight:6,paddingLeft:6}}
      >
        Approve
      </Button>
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
             <h6>Pass Key</h6>
          
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
              
               </div>
             </div>
            
           </div>
         </div>

            )}
            {activeTab === "3" && (
              <>
        
                {/* ===== */}
                <div className="sec-card ">
           <div className="header">
             <h6>IPs</h6>
             <Button type="link" primary  onClick={showModal}>
               <PlusIcon/>
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
                    <Button key="discard" onClick={handleCancel} className="ant-btn-muted ">
                      Discard
                    </Button>,
                    <Button key="add" type="primary" onClick={handleAddIP}>
                      Add
                    </Button>,
                  ]}
                >
                  <Form form={form} layout="vertical" name="add_ip_form" className="form-bg">
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
              {activeTab === "4" && (
              <>
             
             <div className="sec-card ">
           <div className="header">
             <h6>Security Controls  </h6>
         
           </div>
           <div className="sec-list">
             <div className="item">
               <div className="">
                 <div style={{ display: "flex" }}>
            
                   <h6>Unblock user </h6>
                 </div>

                 <p className="text-muted">
                 Enable a previously restricted user to regain access to their account or system.                 </p>
               </div>
               <div style={{ display: "flex" }}>
                
              
               <Switch defaultChecked />
               </div>
             </div>
          
             <div className="item">
               <div className="">
                 <div style={{ display: "flex" }}>
            
                   <h6>Activate/deactivate user<span> (Status :Activated)</span>  </h6>
                 </div>

                 <p className="text-muted">
                 Enable or disable a user’s account to manage their system access.                </p>
               </div>
               <div style={{ display: "flex" }}>
                
              
               <Switch defaultChecked={false} />
               </div>
             </div>
          

             <div className="item">
               <div className="">
                 <div style={{ display: "flex" }}>
            
                   <h6>Global Log out </h6>
                 </div>

                 <p className="text-muted">
                 By activating this, the system will clear all the sessions to sign the user out of all their active sessions.                 </p>
               </div>
               <div style={{ display: "flex" }}>
                
              
               <Button
  type="secondary"
  icon={<LogoutIcon className="svg-white" />} 

>
  Global Log out
</Button>
               </div>
             </div>
        

             <div className="item">
               <div className="">
                 <div style={{ display: "flex" }}>
            
                   <h6>Link user to policy </h6>
                 </div>

                 <p className="text-muted">
                 Assign a user to a security policy to enforce access controls and compliance.
                                  </p>
               </div>
               <div style={{ display: "flex",flexWarp:"Warp ",alignItems:'center'}}>
                
              <div className="empty-status"   onClick={showModal}>
              <AttachyIcon  className="svg-muted mr-2" />
              Link user to policy
              </div>
  
<Modal
                  title="Link user to policy"
                  visible={isModalVisible}
                  onCancel={handleCancel}
                  footer={[
                    <Button key="discard" onClick={handleCancel} className="ant-btn-muted ">
                      Discard
                    </Button>,
                    <Button key="add" type="primary" onClick={handleAddIP}>
                      Save
                    </Button>,
                  ]}
                >
                 <div className="form-bg">
                 <PolicySelector/>
    </div>
           
                </Modal>
               </div>
             </div>
             <div className="item">
               <div className="">
                 <div style={{ display: "flex" }}>
            
                   <h6>Link user to policy </h6>
                 </div>

                 <p className="text-muted">
                 Assign a user to a security policy to enforce access controls and compliance.
                                  </p>
               </div>
               <div style={{ display: "flex",flexWarp:"Warp ",alignItems:'center'}}>
                
              <div className="with-status">
              Standard User Policy
              </div>
               <Link
  type="Link"
  primary
  onClick={showModal}
style={{marginRight:10}}
>
 
<EditIcon  />
</Link>
<Link type="link">
                   <DeleteIcon />
                 </Link>

               </div>
             </div>
              
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