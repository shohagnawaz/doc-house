import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AboutMe from "../AboutMe/AboutMe";

const Overview = () => {
  return (
    <Tabs>
      <TabList className="text-2xl text-center space-x-30">
        <Tab>Overview</Tab>
        <Tab>Locations</Tab>
        <Tab>Reviews</Tab>
        <Tab>Business Hours</Tab>
      </TabList>

      <TabPanel>
        <AboutMe></AboutMe>
      </TabPanel>
      <TabPanel>
        <h2>Coming Soon.........</h2>
      </TabPanel>
      <TabPanel>
        <h2>Coming Soon.........</h2>
      </TabPanel>
      <TabPanel>
        <h2>Coming Soon.........</h2>
      </TabPanel>
    </Tabs>
  );
};

export default Overview;
