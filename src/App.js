import React, { useState } from "react";
import DrawerSidebar from "./components/DrawerSidebar";
import Feed from "./components/Feed";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from "@mantine/notifications";
import "./index.css";

function App() {
  const [fetchWork, setFetchWork] = useState(0);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="container">
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <ModalsProvider >
        <Notifications />
        <DrawerSidebar
          fetchWork={fetchWork}
          setFetchWork={setFetchWork}
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
        <Feed
          fetchWork={fetchWork}
          setFetchWork={setFetchWork}
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
        </ModalsProvider>
      </MantineProvider>
      </div>
  );
}

export default App;
