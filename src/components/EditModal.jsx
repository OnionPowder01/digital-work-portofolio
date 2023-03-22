import React from "react";
import { Modal, Flex } from "@mantine/core";
import DrawerContent from "./DrawerContent";

const EditModal = (props) => {
  return (
    <Flex justify="center" align="center">
      <Modal
        opened={props.openEditModal}
        onClose={() => props.setOpenEditModal(false)}
        title="Edit Your Work Content"
        size="auto"
        centered
      >
        <DrawerContent
          fetchWork={props.fetchWork}
          setFetchWork={props.setFetchWork}
          projectImage={props.projectImage}
          projectName={props.projectName}
          projectLink={props.projectLink}
          uid={props.uid}
          setOpenEditModal={props.setOpenEditModal}
        />
      </Modal>
    </Flex>
  );
};

export default EditModal;
