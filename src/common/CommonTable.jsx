import React from 'react';
import { Table } from "antd";

const CommonTable = ({dataSource,columns}) => {
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default CommonTable;