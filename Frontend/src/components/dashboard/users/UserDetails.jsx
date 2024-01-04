import React, { useEffect, useState } from "react";
import "./userDetails.scss";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import profileImage from "../../../assets/images/profileImage.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const headers = {
    "Content-Type": "application/json",
    "auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4YWJlODg4MDcxZDQwYjkzM2JkMWQwIn0sImlhdCI6MTcwMzY2ODk2OH0.AIr0E1cWvzH78UgqS4iNHWz9vGpXgZFBUkYt4v674Bc",
  };

  useEffect(() => {
    axios
      .post(
        "https://testyourapp.online:4203/cms-backend/api/client/get-clients",
        {},
        {
          headers: headers,
        },
      )
      .then((r) => setUserData(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <div className="userDetails-container">
        <div className="grid-table header">
          <div className="item1">
            <input type="checkbox" />
          </div>
          <div className="item2">Client Name</div>
          <div className="item3">Contact</div>
          <div className="item4">Category</div>
          <div className="item5">Action</div>
        </div>

        {userData?.map((item) => (
          <div className="grid-table row" key={item._id}>
            <div>
              {" "}
              <input type="checkbox" />
            </div>
            <div className="user-image-container">
              <div className="image-wrapper">
                <img src={profileImage} alt="userImage" loading="lazy" />
              </div>
              <h4>{item.userName}</h4>
            </div>
            <div>{item.email}</div>
            <div>{item.projectCategory}</div>

            <div className="user-edit-icons">
              <div className="user-icons">
                <FaRegEdit />
              </div>
              <div className="user-icons">
                <IoTrashBinOutline />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
