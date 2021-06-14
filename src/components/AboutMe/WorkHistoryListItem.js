import { useState, useEffect } from "react";

function WorkHistoryListItem({ item }) {
  const [showMore, setShowMore] = useState(true);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!showMore) {
      const accomplishments = item.accomplishments.map(
        (accomplishment, idx) => {
          return <li key={idx}>{accomplishment}</li>;
        }
      );

      const skills = item.skills.map((skill, idx) => {
        return <li key={idx}>{skill}</li>;
      });

      const tools = item.tools.map((tool, idx) => {
        return <li key={idx}>{tool}</li>;
      });

      setDisplay(
        <>
          <h1>Accomplishments</h1>
          <ul>{accomplishments}</ul>
          <h1>Skills</h1>
          <ul>{skills}</ul>
          <h1>Tools</h1>
          <ul>{tools}</ul>
        </>
      );
    } else {
      //setDisplay("");
    }
  }, [showMore, item]);

  const showDetails = async () => {
    //if (showMore) {
    //  setDisplay(formatDisplay());
    //} else {
    //  setDisplay("");
    //}
    setShowMore(!showMore);
    const tempWorkListItem = document.getElementById(
      `work_list_item_${item.id}`
    );
    if (tempWorkListItem) {
      console.log(`Scrolling`);
      //tempWorkListItem.scrollIntoView();
    }
  };

  const formatDisplay = () => {
    const accomplishments = item.accomplishments.map((accomplishment, idx) => {
      return <li key={idx}>{accomplishment}</li>;
    });

    const skills = item.skills.map((skill, idx) => {
      return <li key={idx}>{skill}</li>;
    });

    const tools = item.tools.map((tool, idx) => {
      return <li key={idx}>{tool}</li>;
    });
    //const sectionTools = <ul>{tools}</ul>;

    return (
      <>
        <h1>Accomplishments</h1>
        <ul>{accomplishments}</ul>
        <h1>Skills</h1>
        <ul>{skills}</ul>
        <h1>Tools</h1>
        <ul>{tools}</ul>
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
          <span
            className={
              showMore
                ? "display_none"
                : "work_history_company_address display_all"
            }
          >
            {item.company_location}
          </span>
        </section>
      </section>
      <span className="work_history_job_title">{item.job_title}</span>
      <span className="work_history_responsibilities">
        {item.responsibilities}
      </span>
      <section id="worklistdetails" className={showMore ? "" : "visible"}>
        {display}
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

export { WorkHistoryListItem };
