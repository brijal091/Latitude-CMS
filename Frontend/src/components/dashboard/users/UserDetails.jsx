import React from "react";
import "./userDetails.scss";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import profileImage from "../../../assets/images/profileImage.png";

const UserDetails = () => {
  const arr = [
    {
      id: 1,
      name: "Shailesh Sampat",
      image:
        "https://cdn.pixabay.com/photo/2017/07/11/00/24/house-2492054_1280.png",
      contact: "shailesh@gmail.com",
      category: "Property",
    },
    {
      id: 2,
      name: "Vrushabh Veer",
      image:
        "https://cdn.pixabay.com/photo/2017/07/11/00/24/house-2492054_1280.png",
      contact: "vrushabh@gmail.com",
      category: "Hotel",
    },
  ];

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

        {arr.map((item) => (
          <div className="grid-table row" key={item.id}>
            <div>
              {" "}
              <input type="checkbox" />
            </div>
            <div className="user-image-container">
              <div className="image-wrapper">
                <img src={profileImage} alt="userImage" loading="lazy" />
              </div>
              <h4>{item.name}</h4>
            </div>
            <div>{item.contact}</div>
            <div>{item.category}</div>

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
