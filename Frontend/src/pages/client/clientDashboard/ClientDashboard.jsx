import React from "react";
import "./clientDashboard.scss";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";

const ClientDashboard = () => {
  const arr = [
    {
      title: "Avi House",
      image:
        "https://cdn.pixabay.com/photo/2017/07/11/00/24/house-2492054_1280.png",
      price: 2450,
    },
    {
      title: "Sb House",
      image:
        "https://cdn.pixabay.com/photo/2017/07/11/00/24/house-2492054_1280.png",
      price: 5000,
    },
  ];

  return (
    <div>
      <div className="table-container">
        <div className="grid-table header">
          <div className="item1">
            {" "}
            <input type="checkbox" />
          </div>
          <div className="item2">Image</div>
          <div className="item3">Product Title</div>
          <div className="item4">Price</div>
          <div className="item5">Action</div>
        </div>

        {arr.map((item) => (
          <div className="grid-table row">
            <div>
              {" "}
              <input type="checkbox" />
            </div>
            <div className="image-wrapper">
              <img
                src={item.image}
                alt="dummy alt"
                style={{ width: "50px", height: "50px" }}
                loading="lazy"
              />
            </div>
            <div>{item.title}</div>
            <div>₹ {item.price}</div>

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

export default ClientDashboard;
