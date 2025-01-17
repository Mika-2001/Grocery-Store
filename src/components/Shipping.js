import React, { useState } from "react";
import { Button, Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa"; // Importing the question mark icon
import { useNavigate } from "react-router-dom"; // Import useNavigate for page redirection

function Shipping() {
  const [showHelp, setShowHelp] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to toggle the modal
  const handleHelpClose = () => setShowHelp(false);
  const handleHelpShow = () => setShowHelp(true);

  const handleShipNow = () => {
    // Redirect to Thank You page when Ship Now is clicked
    navigate("/thank-you");
  };

  return (
    <div className="container mt-4">
      <h1>Shipping Page</h1>
      <p>Select how you want your items to be shipped.</p>

      {/* Help Icon Button */}
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="help-tooltip">Click for more info about shipping options</Tooltip>}
      >
        <Button variant="link" onClick={handleHelpShow}>
          <FaQuestionCircle size={24} />
        </Button>
      </OverlayTrigger>

      {/* Modal for help information */}
      <Modal show={showHelp} onHide={handleHelpClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Options Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Shipping Options:</h5>
          <ul>
            <li><strong>Standard Shipping:</strong> Delivered in 5-7 business days.</li>
            <li><strong>Express Shipping:</strong> Delivered in 1-2 business days.</li>
            <li><strong>International Shipping:</strong> Delivery times vary by location.</li>
          </ul>
          <p>Choose the best option based on your needs. If you have any questions, feel free to contact our support team.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHelpClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      
      <div>
        <label>Select Shipping Method:</label>
        <select>
          <option value="standard">Standard Shipping</option>
          <option value="express">Express Shipping</option>
          <option value="international">International Shipping</option>
        </select>
      </div>

      {/* Ship Now Button */}
      <div className="mt-4">
        <Button className="btn btn-primary" onClick={handleShipNow}>
          Ship Now
        </Button>
      </div>
    </div>
  );
}

export default Shipping;
