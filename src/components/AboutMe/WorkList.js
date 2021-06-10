import React from "react";
import { WorkHistoryItems } from "./WorkHistoryItems";
import { WorkListItem } from "./WorkListItem";

//const showMore = (event) => {
//  console.log(`showMore selected ${worklist[event.target.name].company_name}`);
//  //for (let x in event.target) {
//  //  console.log(`x = ${x}`);
//  //}
//};

const WorkList = () => {
  const [showMore, setShowMore] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const showDetails = (event) => {
    const nIndex = Number(event.target.name);
    const newStates = [...showMore];
    newStates[nIndex] = !newStates[nIndex];
    console.log(`STATE = ${newStates[nIndex]}`);
    //console.log(`BEFORE = ${showMore[nIndex]}`);
    //showMore[nIndex] = !showMore[nIndex];
    setShowMore(newStates);
    //console.log(`AFTER = ${showMore[nIndex]}`);
    ///console.log(`showMore selected ${worklist[nIndex].company_name}`);
    //console.log(`showMore = ${showMore}`);
    //setShowMore(...showMore, !showMore[nIndex]);
    //console.log(`showMore = ${showMore}`);
  };

  return WorkHistoryItems.map((item, idx) => {
    return <WorkListItem key={item.id} item={item} />;
  });
}; // End WorkList

export { WorkList };
