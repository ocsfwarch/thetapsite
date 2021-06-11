import React from "react";
import { WorkListItem } from "./WorkListItem";
import { WorkHistoryItems } from "../Helpers/WorkHistoryItems";

function WorkList() {
  const items = WorkHistoryItems.map((item, idx) => {
    return <WorkListItem key={item.id} item={item} />;
  });

  return <div className="work_history_container">{items}</div>;
}

export { WorkList };
