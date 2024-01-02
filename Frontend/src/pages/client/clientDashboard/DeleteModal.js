import React, { useState } from "react";
import "./deleteModal.scss";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DeleteModal = () => {
  const customStyles = {
    content: {
      width: "30%",
      height: "25%",
      margin: "auto",
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="delete-modal-container">
      <button onClick={openModal} className="deleteBtn">
        Delete
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Simple Modal"
        style={customStyles}
      >
        <div className="delete-modal-card">
          <h1>Are you sure you want to delete this item?</h1>
          <div className="btn-container">
            <button onClick={closeModal} className="cancelBtn">
              Cancel
            </button>
            <button className="deleteBtn">Delete</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
