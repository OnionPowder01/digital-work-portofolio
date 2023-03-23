import React from "react";
import axios from "axios";
import { Button } from '@mantine/core';
import { WorkNotification } from "./WorkNotification"


const EditWorkButton = (props) => {


    const editWork = async (objectId) => {
        const formData = new FormData();
        formData.append("uid", objectId);
        formData.append("projectName", props.projectData.projectName);
        formData.append("projectLink", props.projectData.projectLink);
        formData.append("projectImage",props.projectData.projectImage);
        
        try {
          const response = await axios.post(
            "https://backend-app-57xj.onrender.com/update",
            formData
          );
          props.setFetchWork((prevCount) => prevCount + 1);
          props.setOpenEdit(false);
          WorkNotification()
          console.log("Server response: ", response);
        } catch (err) {
          console.log("Error: ", err);
        }
      };



  return (
    <Button variant="outline" onClick={() => editWork(props.id)}>Edit</Button>
  )
}

export default EditWorkButton