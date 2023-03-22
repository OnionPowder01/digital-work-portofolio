import React, { useState, useEffect } from "react";
import { TextInput, Flex } from "@mantine/core";
import DropzoneButton from "./DropzoneButton";
import { v1 as uuidv1 } from "uuid";
import SubmitWorkButton from "./SubmitWorkButton";
import EditWorkButton from "./EditWorkButton";

const DrawerContent = (props) => {
  const [imageLink, setImageLink] = useState(props.imageLink);
  const [id, setId] = useState(`${uuidv1()}`);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const url = event.target.result;
      setImageLink(url);
    };

    reader.readAsDataURL(file);
  };

  const [projectData, setProjectData] = useState({
    projectName: props.projectName,
    projectLink: props.projectLink,
    projectImage: props.projectImage,
  });
  console.log(projectData);

  useEffect(() => {
    if (imageLink) {
      setProjectData({ ...projectData, projectImage: imageLink });
    }

    // eslint-disable-next-line
  }, [imageLink]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectData({ ...projectData, [name]: value });
  };

  return (
    <>
      <div>
        <TextInput
          placeholder="Write it down.."
          label="Project's name"
          className="project-name-input"
          value={projectData.projectName}
          onChange={(event) => handleInputChange(event)}
          name="projectName"
          withAsterisk
        />
      </div>
      <TextInput
        placeholder="www.github.com"
        label="Link to project"
        value={projectData.projectLink}
        onChange={(event) => handleInputChange(event)}
        name="projectLink"
        withAsterisk
      />
      <div className="dropzone-button">
        <DropzoneButton imageLink={imageLink} handleDrop={handleDrop} />
      </div>
     
        <Flex
          mih={50}
          gap="lg"
          justify="center"
          align="center"
          direction="row"
          wrap="nowrap"
        >
          <SubmitWorkButton
            projectData={projectData}
            setFetchWork={props.setFetchWork}
            close={props.close}
            id={id}
          />
          {props.openEditModal && (<EditWorkButton
            projectData={projectData}
            setFetchWork={props.setFetchWork}
            close={props.close}
            id={props.uid}
            setOpenEdit={props.setOpenEdit}
          />)
        }
        </Flex> 

        
      
    </>
  );
};

export default DrawerContent;
