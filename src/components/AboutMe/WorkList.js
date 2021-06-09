import React from "react";

const worklist = [
  {
    company_name: "Chegg",
    company_location: "San Francisco, CA",
    job_title: "Technical Expert",
    job_start_date: "2019",
    job_stop_date: "Present",
    accomplishments: [
      "Develop technical understanding of curriculum",
      "Review student React, Node, Express, PostgreSQL stack development projects",
      "Provide technical feedback to students on coding, implementation, and deployment",
      "Interacted with GitHub for source code maintenance operations",
    ],
    responsibilities:
      " As a Technical Expert, I am responsible for verifying the conformance of a Student's development submission to required specifications and standards.",
    skills: ["HTML5", "CSS3", "ES6/JavaScript"],
    tools: [
      "Node.js",
      "React",
      "Express",
      "Sequelize ORM",
      "PostgreSQL",
      "Visual Studio Code",
      "GithHub",
    ],
  },
  {
    company_name: "WriterAccess",
    company_location: "Boston, MA (Remote Position, 6 month contract)",
    job_title: "Senior Software Engineer",
    job_start_date: "2019",
    job_stop_date: "2020",
    accomplishments: [
      "Transitioned the client app to Vue.js for data display and state transitions",
      "Built server API data models using Sequelize",
      "Interacted with PostgreSQL database for Create, Read, Update, and Delete operations",
      "Interacted with GitHub for source code maintenance operations",
    ],
    responsibilities:
      "As a Senior Software Engineer, I was responsibile for development of the User portion of the Writer Access application solution.",
    skills: ["HTML5", "CSS3", "ES6/JavaScript"],
    tools: [
      "Node.js",
      "Vue.js",
      "Express",
      "Sequelize ORM",
      "PostgreSQL",
      "Visual Studio Code",
      "GithHub",
    ],
  },
  {
    company_name: "OCSA",
    company_location: "Mission Viejo, CA",
    job_title: "Senior Software Engineer",
    job_start_date: "2018",
    job_stop_date: "2019",
    accomplishments: [
      "Designed and built a News Data Aggregation Platform (chatcorenews.com)",
      "Implemented an automated Twitter feed using Twitter REST API",
      "Designed and built a secure Web-based text application",
      "Interacted with GitHub for source code maintenance operations",
    ],
    responsibilities:
      "As a Senior Software Engineer, I was responsible for the design, implementation, and release of the flagship news application for OCSA.",
    skills: ["HTML5", "CSS3", "ES6/JavaScript"],
    tools: [
      "Node.js",
      "React",
      "Express",
      "Sequelize ORM",
      "MySQL 5",
      "Visual Studio Code",
      "GithHub",
    ],
  },
  {
    company_name: "Advantech B+B Smartworx",
    company_location: "Lake Forest, CA",
    job_title: "Senior Software Engineer",
    job_start_date: "2009",
    job_stop_date: "2018",
    accomplishments: [
      "Designed and built a Web-based Network Device Management application",
      "Supports over 10,000 device connections (routers, switches, mode-converters, etc.)",
      "Supports over 1,000 users",
    ],
    responsibilities:
      "As a Senior Software Engineer, I was responsible for the design, development, and maintenance of the iView2 Element Management System (EMS).",
    skills: ["HTML5", "CSS3", "ES6/JavaScript", "OOA/OOD", "REST"],
    tools: [
      "jQuery",
      "Bootstrap",
      "Node",
      "JSON",
      "Apache",
      "Tomcat",
      "Java SE 8",
      "PHP 7",
      "Eclipse",
      "MySQL 5",
      "TCP/IP",
      "SNMP",
      "GIT",
      "Jenkins",
    ],
  },
  {
    company_name: "Fair Isaac Corporation",
    company_location: "San Diego, CA (REMOTE)",
    job_title: "Lead Software Engineer",
    job_start_date: "1999",
    job_stop_date: "2009",
    accomplishments: [
      "I created an Internet-based version of the MIRA application",
      "I led the development of the health-care fraud analysis application",
      "I maintained the client data storage requirements",
    ],
    responsibilities:
      "As a Lead Software Engineer, I was responsible for the design and implementation of quantitative analysis and predictive software applications involving workers compensation reserving and health-care fraud analysis. ",
    skills: [],
    tools: [],
  },
  /*{
    company_name: "",
    company_location: "",
    job_title: "",
    job_start_date: "",
    job_stop_date: "",
    accomplishments: [],
    responsibilities: [],
    skills: [],
    tools: [],
  },*/
];

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
    //console.log(
    //  `showMore selected ${worklist[event.target.name].company_name}`
    //);
    //console.log(`showMore = ${showMore}`);
    //setShowMore(...showMore, !showMore[nIndex]);
    //console.log(`showMore = ${showMore}`);
  };

  return worklist.map((item, idx) => {
    return (
      <div className="work_history_card" key={idx}>
        <span>
          {item.company_name} [From: {item.job_start_date} To:{" "}
          {item.job_stop_date}]
        </span>
        <span>{item.job_title}</span>
        <span>
          <button name={idx} onClick={showDetails}>
            Show More
          </button>
        </span>
      </div>
    );
  });
}; // End WorkList

export { WorkList };
