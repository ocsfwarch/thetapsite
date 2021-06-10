import { useState } from "react";

function WorkListItem({ item }) {
  const [details, setDetails] = useState({ showMore: false, display: "" });

  const showDetails = async () => {
    let newDisplay = "";
    if (details.showMore) {
      // Remove the displayed content
      newDisplay = "";
    } else {
      // Add the display content
      newDisplay = formatDisplay();
      newDisplay = "test";
    }
    setDetails({
      ...details,
      ["showMore"]: !details.showMore,
      ["display"]: newDisplay,
    });
  };

  const formatDisplay = async () => {
    const accomplishments = item.accomplishments.map((item) => {
      return <li>{item}</li>;
    });

    return accomplishments;
  };

  return (
    <div
      className={
        details.showMore
          ? "work_history_card work_history_card_expand"
          : "work_history_card"
      }
    >
      <span>
        {item.company_name} [From: {item.job_start_date} To:{" "}
        {item.job_stop_date}]
      </span>
      <span>{item.job_title}</span>
      <div id="worklistdetails" className={details.showMore ? "visible" : ""}>
        <h1>Accomplishments</h1>
        {details.showMore ? (
          <ul>
            {item.accomplishments.map((accomplishment, idx) => {
              return <li key={idx}>{accomplishment}</li>;
            })}
          </ul>
        ) : (
          ""
        )}
        <h1>Responsibilities</h1>
        {details.showMore ? <span>{item.responsibilities}</span> : ""}
        <h1>Skills</h1>
        {details.showMore ? (
          <ul>
            {item.skills.map((skill, idx) => {
              return <li key={idx}>{skill}</li>;
            })}
          </ul>
        ) : (
          ""
        )}
        <h1>Tools</h1>
        {details.showMore ? (
          <ul>
            {item.tools.map((tool, idx) => {
              return <li key={idx}>{tool}</li>;
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
      <span>
        <button name={item.id} onClick={showDetails}>
          {details.showMore ? "Show Less" : "Show More"}
        </button>
      </span>
    </div>
  );
}

export { WorkListItem };
