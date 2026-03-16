import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const expertise = [
    {
      category: "Data & Analytics",
      skills: [
        { name: "AWS Data Stack", level: "Expert" },
        { name: "SQL & Data Modeling", level: "Expert" },
        { name: "Tableau & QuickSight", level: "Advanced" },
        { name: "ETL/ELT Pipelines", level: "Advanced" }
      ]
    },
    {
      category: "AI & Automation",
      skills: [
        { name: "Generative AI & LLMs", level: "Advanced" },
        { name: "ML Architecture", level: "Advanced" },
        { name: "Agentic Workflows", level: "Proficient" },
        { name: "Computer Vision", level: "Proficient" }
      ]
    },
    {
      category: "Leadership & Strategy",
      skills: [
        { name: "Team Leadership", level: "Expert" },
        { name: "Cross-functional Collaboration", level: "Expert" },
        { name: "Technical Strategy", level: "Advanced" },
        { name: "Mentorship & Development", level: "Advanced" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS Architecture", level: "Expert" },
        { name: "Scalable Systems Design", level: "Advanced" },
        { name: "Cost Optimization", level: "Advanced" },
        { name: "DevOps & Automation", level: "Proficient" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Expert": return "level-expert";
      case "Advanced": return "level-advanced";
      case "Proficient": return "level-proficient";
      default: return "";
    }
  };

  return (
    <div className="whatIDO">
      <div className="whatIDO-container">
        <div className="what-header">
          <h2>
            <div>WHAT</div>
            <div>
              I <span className="do-h2">DO</span>
            </div>
          </h2>
          <p className="what-tagline">Expertise & Proficiency Levels</p>
        </div>
        
        <div className="expertise-matrix">
          {expertise.map((category, idx) => (
            <div key={idx} className="expertise-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div className={`skill-fill ${getLevelColor(skill.level)}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
