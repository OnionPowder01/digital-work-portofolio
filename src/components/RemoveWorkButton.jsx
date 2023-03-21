import React from "react";
import axios from "axios";
import { Button, CloseButton, Group } from "@mantine/core";

const RemoveWorkButton = (props) => {
  const deleteWork = async (objectId) => {
    try {
      const response = await axios.get(
        `https://digital-work-portofolio-backend-6ozxm2b4w-onionpowder01.vercel.app/remove?uid=${objectId}`
      );
      props.setFetchWork((prevCount) => prevCount + 1);
      console.log("Server response: ", response);
      console.log(objectId);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <Group position="center">
    <Button variant="subtle" color="dark" onClick={() => deleteWork(props.uid)}>
      Delete
  
      <CloseButton iconSize={16} variant="transparent" className="close-button" /> 
      
    </Button>
    </Group>
  );
};

export default RemoveWorkButton;
