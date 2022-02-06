import "./message.css";
import React, { useContext, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { GiSkills } from "react-icons/gi";
import {
  getmyPublishedjobs,
  deletemyJobs,
} from "../../Dashboard/Published Jobs/apiPublishedjobs";
import moment from "moment";
import { MdCardMembership } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { SyncOutlined } from "@ant-design/icons";
import { Link, useHistory, useParams } from "react-router-dom";
import { SiMicrodotblog } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { FcComboChart, FcFilledFilter } from "react-icons/fc";
import { EyeOutlined } from "@ant-design/icons";
import ReactHtmlParser from "react-html-parser";
import { HiHand } from "react-icons/hi";

const Message = () => {
  const [posts, setPosts] = useState([]);

  const loadjobPost = () => {
    getmyPublishedjobs()
      .then((result) => {
        setPosts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadjobPost();
  }, []);

  return <></>;
};

export default Message;
