import React from "react";
import axios from "axios";
import { Button } from '@mantine/core';


const EditWorkButton = (props) => {
  console.log(props.setFetchWork)

    const editWork = async (objectId) => {
        const formData = new FormData();
        formData.append("uid", objectId);
        formData.append("projectName", props.projectData.projectName);
        formData.append("projectLink", props.projectData.projectLink);
        formData.append("projectImage",props.projectData.projectImage);
        
        try {
          const response = await axios.post(
            "https://digital-work-portofolio-backend.vercel.app/update",
            formData
          );
          props.setFetchWork((prevCount) => prevCount + 1);
          props.setOpenEdit(false);
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