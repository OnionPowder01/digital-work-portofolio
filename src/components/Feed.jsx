import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkCards from "./WorkCards";
import { SimpleGrid } from "@mantine/core";
import HeroSection from "./HeroSection";

const Feed = (props) => {
  const [work, setWork] = useState([]);
  const [showPortofolio, setShowPortofolio] = useState(false);

  const getWork = async () => {
    try {
      const response = await axios.get("https://backend-app-57xj.onrender.com/get-work");
      setWork(response.data);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWork();
  }, [props.fetchWork]);

  return (
    <>
      <HeroSection
        openDrawer={props.openDrawer}
        setOpenDrawer={props.setOpenDrawer}
        setShowPortofolio={setShowPortofolio}
      />

      <SimpleGrid
        cols={4}
        spacing="lg"
        verticalSpacing="lg"
        breakpoints={[{ maxWidth: "48rem", cols: 2 }]}
        className="simplegrid-container"
      >
        {showPortofolio &&
          work.map((elem) => (
            <WorkCards
              projectName={elem.projectName}
              projectLink={elem.projectLink}
              projectImage={elem.projectImage}
              fetchWork={props.fetchWork}
              setFetchWork={props.setFetchWork}
              uid={elem.uid}
              key={elem.uid}
            />
          ))}
      </SimpleGrid>
    </>
  );
};

export default Feed;
