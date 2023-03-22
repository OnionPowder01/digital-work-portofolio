import React, { useState } from "react";
import { Card, Image, Text, Button} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ImageModal from "./ImageModal";
import EditModal from "./EditModal";
import RemoveWorkButton from "./RemoveWorkButton";

const WorkCards = (props) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Card shadow="sm" padding="xl" component="a" target="_blank">
        <Card.Section>
          <Image src={props.projectImage} height={200} caption="Click image for better view" alt="" onClick={open} />
        </Card.Section>

        <Text weight={500} size="xl" mt="md">
          {props.projectName}
        </Text>

        <Text mt="xs" color="dimmed" size="lg">
          {props.projectLink}
        </Text>
        <div className="flex-buttons">
        <Button variant="subtle" color="dark" onClick={() => props.setOpenEditModal(true)}>Edit</Button>
        <RemoveWorkButton
          fetchWork={props.fetchWork}
          setFetchWork={props.setFetchWork}
          projectImage={props.projectImage}
          projectName={props.projectName}
          projectLink={props.projectLink}
          uid={props.uid}
        />
        </div>
      </Card>
      
      <EditModal
        openEdit={props.openEditModal}
        setOpenEdit={props.setOpenEditModal}
        fetchWork={props.fetchWork}
        setFetchWork={props.setFetchWork}
        projectImage={props.projectImage}
        projectName={props.projectName}
        projectLink={props.projectLink}
        uid={props.uid}
      />
      <ImageModal
        opened={opened}
        close={close}
        projectImage={props.projectImage}
      />
    </>
  );
};

export default WorkCards;
