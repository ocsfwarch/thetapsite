const skills = [
  { image: "/images/Techs/css.png", text: "CSS3" },
  { image: "/images/Techs/git.png", text: "GIT" },
  { image: "/images/Techs/github.png", text: "GIT Hub" },
  { image: "/images/Techs/html.png", text: "HTML5" },
  { image: "/images/Techs/java_logo.jpg", text: "JAVA" },
  { image: "/images/Techs/js.png", text: "JavaScript" },
  { image: "/images/Techs/knex.png", text: "Knex" },
  { image: "/images/Techs/mocha_medium.png", text: "Mocha" },
  { image: "/images/Techs/mysql.png", text: "MySQL" },
  { image: "/images/Techs/NodeJS_New_Pantone_medium.png", text: "Node" },
  { image: "/images/Techs/npm.png", text: "NPM" },
  { image: "/images/Techs/php.png", text: "PHP" },
  { image: "/images/Techs/postgresql.png", text: "Postgresql" },
  { image: "/images/Techs/react.png", text: "React" },
  { image: "/images/Techs/sequelize.png", text: "Sequelize" },
  { image: "/images/Techs/vscode.png", text: "Visual Studio Code" },
  { image: "/images/Techs/vue.png", text: "Vue.js" },
];

const SkillsList = () => {
  return (
    <section className="skills_list">
      <ul>
        {skills.map((item, idx) => (
          <li key={idx}>
            <img src={item.image} alt={item.text} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { SkillsList };
