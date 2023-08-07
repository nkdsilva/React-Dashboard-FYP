//import { GridColDef } from "@mui/x-data-grid";
import "./users.scss";
//import { useState } from "react";
import Datatable from "../../components/datatable/Datatable";
//import Add from "../../components/add/Add";
//import { userRows } from "../../data";
// import { useQuery } from "@tanstack/react-query";

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <Datatable/>
    </div>
  );
};

export default Users;