import React from "react";
import "./PopUp.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <Button
          className="popup-btn"
          variant="contained"
          fontSize="large"
          color="success"
          onClick={() => props.setTrigger(false)}
        >
          Continue
        </Button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
