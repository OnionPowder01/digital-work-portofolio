import React from "react";
import { Modal, Image } from '@mantine/core';

const ImageModal = ({ opened, close, projectImage }) => {

  return (
    <>
      <Modal opened={opened} onClose={close} >
        <Image maxWidth={240}  mx="auto" radius="md" src={projectImage}  />
      </Modal>
    </>
  );
};

export default ImageModal;