import { useState } from "react";

function WorkListItem({ item }) {
  const [showMore, setShowMore] = useState(true);
  const [display, setDisplay] = useState("");

  const showDetails = async () => {
    if (showMore) {
      setDisplay(formatDisplay());
    } else {
      setDisplay("");
    }
    setShowMore(!showMore);
    const tempWorkListItem = document.getElementById(
      `work_list_item_${item.id}`
    );
    if (tempWorkListItem) {
      console.log(`Scrolling`);
      tempWorkListItem.scrollIntoView();
    }
  };

  const formatDisplay = async () => {
    const accomplishments = item.accomplishments.map((accomplishment, idx) => {
      return <li key={idx}>{accomplishment}</li>;
    });
    const sectionAccomplishments = <ul>{accomplishments}</ul>;

    const responsibilities = <span>{item.responsibilities}</span>;
    const sectionResponsibilities = <ul>{responsibilities}</ul>;

    const skills = item.skills.map((skill, idx) => {
      return <li key={idx}>{skill}</li>;
    });
    const sectionSkills = <ul>{skills}</ul>;

    const tools = item.tools.map((tool, idx) => {
      return <li key={idx}>{tool}</li>;
    });
    const sectionTools = <ul>{tools}</ul>;

    return (
      <>
        {sectionAccomplishments}
        {sectionResponsibilities}
        {sectionSkills}
        {sectionTools}
      </>
    );
  };

  return (
    <div
      id={`work_list_item_${item.id}`}
      className={
        showMore
          ? "work_history_card"
          : "work_history_card work_history_card_expand"
      }
    >
      <section id="workListItemTitle">
        <section>
          <span className="work_history_company_name">
            <a href={item.company_url} target="blank" title={item.company_url}>
              {item.company_name}
            </a>
          </span>{" "}
          [From:{" "}
          <span className="work_history_job_date">{item.job_start_date}</span>{" "}
          To:{" "}
          <span className="work_history_job_date">{item.job_stop_date}</span>]
          <span className={showMore ? "display_none" : "display_all"}>
            {item.company_location}
          </span>
        </section>
      </section>
      <span className="work_history_job_title">{item.job_title}</span>
      <section id="worklistdetails" className={showMore ? "" : "visible"}>
        <h1>Accomplishments</h1>
        {
          <ul>
            {item.accomplishments.map((accomplishment, idx) => {
              return <li key={idx}>{accomplishment}</li>;
            })}
          </ul>
        }
        <h1>Responsibilities</h1>
        {showMore ? "" : <span>{item.responsibilities}</span>}
        <h1>Skills</h1>
        {
          <ul>
            {item.skills.map((skill, idx) => {
              return <li key={idx}>{skill}</li>;
            })}
          </ul>
        }
        <h1>Tools</h1>
        {
          <ul>
            {item.tools.map((tool, idx) => {
              return <li key={idx}>{tool}</li>;
            })}
          </ul>
        }
      </section>
      <span className="work_history_show_control">
        <button
          className={
            showMore
              ? "work_history_show_more_btn"
              : "work_history_show_less_btn"
          }
          name={item.id}
          onClick={showDetails}
        >
          {showMore ? "Show More" : "Show Less"}
        </button>
      </span>
    </div>
  );
}

export { WorkListItem };
