import React,{useState} from "react";
import "./addemployee.css";

const Addemployee = () => {

const [employername,setEmployername] = useState("");
const [jobposition,setJobposition] = useState("");
const [joineddate,setJoineddate] = useState("");

  return (
    <React.Fragment>
      <div className="listof-employee">
        <h6>Add Employee</h6>
      </div>
    </React.Fragment>
  );
};

export default Addemployee;
