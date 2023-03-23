import React, { useState } from "react";
import axios from "axios";
import { Button, CloseButton, Group, Text } from "@mantine/core";
import { modals } from "@mantine/modals";

const RemoveWorkButton = (props) => {
  const deleteWork = async (objectId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/remove?uid=${objectId}`
      );
      props.setFetchWork((prevCount) => prevCount + 1);
      console.log("Server response: ", response);
      console.log(objectId);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: "Delete your profile",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your work from the portofolio? This
          action is destructive and you will have to contact support to restore
          your data.
        </Text>
      ),
      labels: { confirm: "Delete work", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => deleteWork(props.uid),
    });

  return (
    <Group position="center">
      <Button variant="subtle" color="dark" onClick={openDeleteModal}>
        Delete
        <CloseButton
          iconSize={16}
          variant="transparent"
          className="close-button"
        />
      </Button>
    </Group>
  );
};

export default RemoveWorkButton;
