import { useState } from "preact/hooks";
import TabBar from "preact-material-components/TabBar";
import Pay from "../Pay/Pay";
import HasTicket from "../HasTicket/HasTicket";

import style from "./style.css";
import "preact-material-components/TabBar/style.css";

const content = [<Pay />, <HasTicket />];
const Container = () => {
  const [currentTab, setTab] = useState(0);

  return (
    <div class={style.container}>
      <TabBar activeTabIndex={currentTab}>
        <TabBar.Tab active={currentTab === 0} onClick={() => setTab(0)}>
          <TabBar.TabLabel>Pay Toll</TabBar.TabLabel>
        </TabBar.Tab>
        <TabBar.Tab active={currentTab === 1} onClick={() => setTab(1)}>
          <TabBar.TabLabel>Has Ticket</TabBar.TabLabel>
        </TabBar.Tab>
      </TabBar>
      <div class={style.form}>{content[currentTab]}</div>
    </div>
  );
};
export default Container;
