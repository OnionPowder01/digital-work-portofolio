import React from "react";
import axios from "axios";
import { Button } from '@mantine/core';
import { WorkNotification } from "./WorkNotification";


const SubmitWorkButton = (props) => {

  
  const submitWork = async () => {
    const formData = new FormData();
    formData.append("uid", props.id);
    formData.append("projectName", props.projectData.projectName);
    formData.append("projectLink", props.projectData.projectLink);
    formData.append("projectImage", props.projectData.projectImage);

    try {
      const response = await axios.post(
        "http://localhost:5000/publish",
        formData
      );
      props.setFetchWork((prevCount) => prevCount + 1);
      console.log("Server response: ", response);
      props.close();
      WorkNotification()
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <Button variant="outline" onClick={submitWork}>Save</Button>
  );
};

export default SubmitWorkButton;

