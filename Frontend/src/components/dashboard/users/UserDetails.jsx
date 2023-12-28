import React from "react";
import "./userDetails.scss";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import profileImage from "../../../assets/images/profileImage.png";

const UserDetails = () => {
  return (
    <div>
      <table id="customers">
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Client Name</th>
          <th>Contact</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
        <tr className="client-data">
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <div className="user-image-container">
              <div className="image-wrapper">
                <img src={profileImage} alt="userImage" />
              </div>
              <h4>Shailesh Sampat</h4>
            </div>
          </td>
          <td>shailesh@gmail.com</td>
          <td className="property">Property</td>
          <td>
            <div className="user-edit-icons">
              <div>
                <FaRegEdit />
              </div>
              <div>
                <IoTrashBinOutline />
              </div>
            </div>
          </td>
        </tr>

        <tr className="client-data">
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <div className="user-image-container">
              <div className="image-wrapper">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
                  alt="userImage"
                />
              </div>
              <h4>Vrushabh</h4>
            </div>
          </td>
          <td>vrushabh@gmail.com</td>
          <td className="hotel">Hotel</td>
          <td>
            <div className="user-edit-icons">
              <div>
                <FaRegEdit />
              </div>
              <div>
                <IoTrashBinOutline />
              </div>
            </div>
          </td>
        </tr>

        <tr className="client-data">
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <div className="user-image-container">
              <div className="image-wrapper">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg"
                  alt="userImage"
                />
              </div>
              <h4>Brijal Kansar</h4>
            </div>
          </td>
          <td>brijal@gmail.com</td>
          <td className="ecom">Ecom</td>
          <td>
            <div className="user-edit-icons">
              <div>
                <FaRegEdit />
              </div>
              <div>
                <IoTrashBinOutline />
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UserDetails;
