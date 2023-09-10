import React from "react";
import { S } from "./Works_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj-1.webp";
import timerImg from "../../../assets/images/proj-2.webp";
import { Container } from "../../../components/Container";
import { AnimatePresence, motion } from "framer-motion";

const tabsItems: Array<{
  title: string;
  status: "all" | "landing" | "react" | "spa";
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "Spa",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: socialImg,
    type: "spa",
    id: 1,
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: timerImg,
    type: "React",
    id: 2,
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = React.useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "landing");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "React");
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: "all" | "landing" | "react" | "spa") {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id="works">
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div
                  style={{ width: "400px", flexGrow: 1, maxWidth: "540px" }}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={w.id}
                >
                  <Work key={w.id} title={w.title} text={w.text} src={w.src} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
