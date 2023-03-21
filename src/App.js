import React, { useState } from "react";
import DrawerSidebar from './components/DrawerSidebar'
import Feed from './components/Feed'
import './index.css'



function App() {
  const [fetchWork, setFetchWork ] = useState(0)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)


  return (
  <>
 <DrawerSidebar fetchWork={fetchWork} setFetchWork={setFetchWork} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
 <Feed fetchWork={fetchWork} setFetchWork={setFetchWork} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
 </>
  )
}

export default App;
