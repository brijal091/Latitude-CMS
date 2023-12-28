import React, { useState } from "react";
import "../addProperty/addProperty.scss";
import axios from "axios";

const AddProperty = () => {
  const [data, setData] = useState({
    phoneNumber: "",
    street: "",
    locality: "",
    pictures:"",
    zipCode: "",
    city: "",
    state: "",
    price: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
    isFurnished: "",
    maintainanceFee: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const res = await axios.post("", data);
    //   console.log("Res:", res.data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    console.log("data of property:", data);
  };

  const handleChange = (e, field) => {
    setData({ ...data, [field]: e.target.value });
  };

  return (
    <div className="property-details">
      <div className="property-details-form">
        <h1>You're almost there!</h1>
        <p>
          Include as much details and pictures as possible, and set the right
          price!
        </p>

        <form onSubmit={handleSubmit}>
          <input
            value={data.phoneNumber}
            onChange={(e) => handleChange(e, "phoneNumber")}
            type="number"
            placeholder="Phone Number"
          />
          <br />
          <input
            value={data.street}
            onChange={(e) => handleChange(e, "street")}
            type="text"
            placeholder="Street"
          />
          <br />
          <input
            value={data.locality}
            onChange={(e) => handleChange(e, "locality")}
            type="text"
            placeholder="Locality"
          />
          <br />
          <input
           value={data.pictures}
           onChange={(e) => handleChange(e, "pictures")}
            type="file"
            placeholder="Add Pictures +"
          />
          <br />
          <input
            value={data.zipCode}
            onChange={(e) => handleChange(e, "zipCode")}
            type="number"
            placeholder="Zip Code"
          />
          <br />
          <input
            value={data.city}
            onChange={(e) => handleChange(e, "city")}
            type="text"
            placeholder="City"
          />
          <br />
          <input
            value={data.state}
            onChange={(e) => handleChange(e, "state")}
            type="text"
            placeholder="State"
          />
          <br />
          <input
            value={data.price}
            onChange={(e) => handleChange(e, "price")}
            type="number"
            placeholder="Price"
          />
          <br />
          <textarea
            value={data.description}
            onChange={(e) => handleChange(e, "description")}
            rows="6"
            placeholder="Describe your property"
          />
          <br />
          <input
            value={data.bedrooms}
            onChange={(e) => handleChange(e, "bedrooms")}
            type="number"
            placeholder="Bedrooms"
          />
          <br />
          <input
            value={data.bathrooms}
            onChange={(e) => handleChange(e, "bathrooms")}
            type="number"
            placeholder="Bathrooms"
          />
          <br />
          <input
            value={data.isFurnished}
            onChange={(e) => handleChange(e, "isFurnished")}
            type="text"
            placeholder="Is it furnished?"
          />
          <br />
          <input
            value={data.maintainanceFee}
            onChange={(e) => handleChange(e, "maintainanceFee")}
            type="number"
            placeholder="Maintenance Fee"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
