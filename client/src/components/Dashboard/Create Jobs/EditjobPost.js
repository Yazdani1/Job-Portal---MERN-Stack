import "./reateJobs.css";
import { createjobPosts } from "./apiCreatejobs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "../../UserContext";


const EditjobPost = () => {

    const [state, setState] = useContext(UserContext);

    const history = useHistory();
  
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [city, setCity] = useState("");
    const [house, setHouse] = useState("");
    const [country, setCountry] = useState("");
    const [jobtypes, setJobtypes] = useState("Full-Time");
    const [requirements, setRequirements] = useState("");
    const [skills, setSkills] = useState("");
  


  return (
    <h1>Edit post</h1>
  );
}

export default EditjobPost