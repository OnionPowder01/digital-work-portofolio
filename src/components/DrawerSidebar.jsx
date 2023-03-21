import React from "react";
import { Drawer} from '@mantine/core';
import DrawerContent from "./DrawerContent";

const DrawerSideBar = (props) => {

  return (
    <>
      <Drawer opened={props.openDrawer} onClose={() => props.setOpenDrawer(false)} title="Your Amazing Work" position="right"  overlayProps={{ opacity: 0.5, blur: 4 }}>
       <DrawerContent fetchWork={props.fetchWork} setFetchWork={props.setFetchWork} close={() => props.setOpenDrawer(false)}/>
      </Drawer>
    </>
  );
}

export default DrawerSideBar