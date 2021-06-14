import React from "react";
import { WorkHistoryListItem } from "./WorkHistoryListItem";
import { WorkHistoryItems } from "../Helpers/WorkHistoryItems";

function WorkHistoryList() {
  const items = WorkHistoryItems.map((item, idx) => {
    return <WorkHistoryListItem key={item.id} item={item} />;
  });

  return <div className="work_history_container">{items}</div>;
}

export { WorkHistoryList };
