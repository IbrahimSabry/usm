import React, { useState } from "react";
import { Table, Button, Modal, Input, Card } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom"; // Import useHistory for navigation
import { ReactComponent as DeleteIcon } from "../assets/icons/Close Square.svg";

import { ReactComponent as AddUserIcon } from "../assets/icons/Add User.svg"; // Assuming the same icon is needed for consistency

// Sample data for the table
const dataSource = [
  {
    key: "1",
    policyName: "Standard User Policy",
    linkedUsers: 58,
    createdBy: "Admin User",
    creationDate: "10.10.2024",
  },
  {
    key: "2",
    policyName: "Standard User Policy",
    linkedUsers: 58,
    createdBy: "Admin User",
    creationDate: "10.10.2024",
  },
  {
    key: "3",
    policyName: "Standard User Policy",
    linkedUsers: 58,
    createdBy: "Admin User",
    creationDate: "10.10.2024",
  },
];

const SecurityPolicies = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [policyName, setPolicyName] = useState("");
  const history = useHistory(); // Use history for redirecting

  // Table columns
  const columns = [
    {
      title: "Policy Name",
      dataIndex: "policyName",
      key: "policyName",
    },
    {
      title: "Linked Users",
      dataIndex: "linkedUsers",
      key: "linkedUsers",
    },
    {
      title: "Created by",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Creation date",
      dataIndex: "creationDate",
      key: "creationDate",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Button
          icon={<DeleteIcon />}
          type="text"
          danger
          onClick={(e) => {
            e.stopPropagation(); // Prevents triggering row click
            handleDelete(record.key);
          }}
        />
      ),
    },
  ];

  // Handle Modal visibility
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddPolicy = () => {
    // Add logic for creating a new policy
    console.log("Policy Created: ", policyName);
    setIsModalVisible(false);
  };

  // Handle delete action
  const handleDelete = (key) => {
    console.log("Deleted policy with key: ", key);
  };

  // Handle row click to redirect to policy details
  const handleRowClick = (record) => {
    history.push(`/policy/${record.key}`);
  };

  return (
    <Card bordered={false} 
    
    title={
      <div className="d-flex justify-content-between flex-wrap">
   
       
        <h4 className="card-title">Security Policies</h4>

<Button type="primary" onClick={showModal} icon={<AddUserIcon />}>
  Add Policy
</Button>

      </div>
    }
    >
   

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
          style: { cursor: "pointer" }, // To show that the row is clickable
        })}
      />

      <Modal
        title="Create Security Policy"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Discard
          </Button>,
          <Button key="submit" type="primary" onClick={handleAddPolicy}>
            Add
          </Button>,
        ]}
      >
        <div className="form-bg p-4">
          <Input
            placeholder="Security Policy Name"
            value={policyName}
            onChange={(e) => setPolicyName(e.target.value)}
          />
        </div>
      </Modal>


   
   
    </Card>
  );
};

export default SecurityPolicies;