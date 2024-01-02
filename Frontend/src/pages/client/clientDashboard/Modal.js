import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ModalDemo = ({ price, image, address, title }) => {
  const customStyles = {
    content: {
      width: "30%", // Set your desired width
      height: "50%", // Set your desired height
      margin: "auto",
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    closeModal();
  };

  const [payload, setPayload] = useState({
    price: price,
    title: title,
    address: address,
    image: image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Simple Modal"
        style={customStyles}
      >
        <h2>Simple Modal Form</h2>
        <form
          onSubmit={handleSubmit}
          style={{ width: "200px", height: "100px" }}
        >
          <label>
            title:
            <input
              type="text"
              name="title"
              value={payload.title}
              onChange={handleChange}
              placeholder="Title"
            />
          </label>
          <br />
          <label>
            price:
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={payload.price}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            price:
            <input
              type="url"
              name="image"
              placeholder="Image"
              value={payload.image}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Address:
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={payload.address}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default ModalDemo;
