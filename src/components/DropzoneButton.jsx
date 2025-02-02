import React, { useState, useRef } from "react";
import { Text, Group, Button, createStyles, rem } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
    wrapper: {
      position: 'relative',
      marginBottom: rem(30),
    },
  
    dropzone: {
      borderWidth: rem(1),
      paddingBottom: rem(50),
    },
  
    icon: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },
  
    control: {
      position: 'absolute',
      width: rem(250),
      left: `calc(50% - ${rem(125)})`,
      bottom: rem(-20),
    },
  }));
  
 const DropzoneButton = ({imageLink, handleDrop}) => {
    const { classes, theme } = useStyles();
    const openRef = useRef(null);
   
  
    return (
      <div className={classes.wrapper}>
        <Dropzone
          openRef={openRef}
          onDrop={handleDrop}
          className={classes.dropzone}
          radius="md"
          accept={[MIME_TYPES.jpeg]}
          maxSize={30 * 1024 ** 2}
        >
          <div style={{ pointerEvents: 'none' }}>
            <Group position="center">
              <Dropzone.Accept>
                <IconDownload
                  size={rem(50)}
                  color={theme.colors[theme.primaryColor][6]}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size={rem(50)} color={theme.colors.red[6]} stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload
                  size={rem(50)}
                  color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                  stroke={1.5}
                />
              </Dropzone.Idle>
            </Group>
  
            <Text ta="center" fw={700} fz="lg" mt="xl">
              <Dropzone.Accept>Drop Image here</Dropzone.Accept>
              <Dropzone.Reject>Image file less than 30mb</Dropzone.Reject>
              <Dropzone.Idle>Upload Image</Dropzone.Idle>
            </Text>
            <Text ta="center" fz="sm" mt="xs" c="dimmed">
              Drag&apos;n&apos;drop image here to upload. We can accept only <i>.jpg</i> files that
              are less than 30mb in size.
            </Text>
          </div>
        </Dropzone>
  
        <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
          Select files
        </Button>
        <div>
        {imageLink ? (
          <img src={imageLink} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        ) : (
          ''
        )}
        </div>

      </div>
      
    
    );
  }

export default DropzoneButton
  