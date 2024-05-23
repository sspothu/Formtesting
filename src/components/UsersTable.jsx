import React from "react";

import CommonTable from "../common/CommonTable";

const UsersTable = ({ usersdata }) => {
  const column = [
    {
      key: "0",
      title: "Firstname",
      dataIndex: "firstname",
    },
    {
        key: "1",
        title: "Lastname",
        dataIndex: "lastname", 
    },
    {
        key : "2",
        title : "Email",
        dataIndex : "email"
    }
  ];
  return (
    <>
      <CommonTable dataSource={usersdata} columns={column}/>
    </>
  );
};

export default UsersTable;
