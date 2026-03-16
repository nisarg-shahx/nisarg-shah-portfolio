import "./styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Defect Attribution System",
      category: "MACHINE LEARNING & ANALYTICS",
      challenge: "Manual defect analysis was consuming 400+ hours annually, with inconsistent accuracy across teams.",
      solution: "Designed and deployed an ML-driven system using AWS Bedrock and custom ML models to automate defect categorization and root cause analysis.",
      impact: [
        "15% improvement in defect attribution accuracy",
        "400+ hours saved annually per program leader",
        "Reduced manual analysis time by 75%"
      ],
      techStack: ["AWS Bedrock", "Python", "PostgreSQL", "AWS Lambda", "Enterprise-wide"]
    },
    {
      title: "Flash Report Automation Platform",
      category: "BUSINESS INTELLIGENCE & AUTOMATION",
      challenge: "Program leaders spent excessive time manually compiling flash reports, delaying critical business decisions.",
      solution: "Built an AI-driven bridge connecting multiple data sources with automated report generation, deployed on AWS infrastructure with real-time data sync.",
      impact: [
        "75% reduction in report creation time",
        "400+ hours saved annually",
        "Real-time insights instead of delayed reports"
      ],
      techStack: ["AWS Glue", "AWS Athena", "Tableau", "Python", "50+ stakeholders"]
    },
    {
      title: "Analytics Dashboards Ecosystem",
      category: "DATA STRATEGY & VISUALIZATION",
      challenge: "Lack of standardized metrics led to inconsistent decision-making across operations.",
      solution: "Built a comprehensive analytics dashboard ecosystem with 140+ dashboards spanning data strategy, KPI frameworks, and real-time operational insights.",
      impact: [
        "140+ analytics dashboards delivered",
        "KPI frameworks supporting data-driven decisions",
        "Unified analytics platform across operations"
      ],
      techStack: ["Tableau", "AWS QuickSight", "PostgreSQL", "AWS RDS", "$40M+ business value"]
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
              
              <div className="project-content">
                <div className="project-section">
                  <h4>Challenge</h4>
                  <p>{project.challenge}</p>
                </div>
                
                <div className="project-section">
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>
                
                <div className="project-section">
                  <h4>Impact</h4>
                  <ul className="impact-list">
                    {project.impact.map((item, impactIdx) => (
                      <li key={impactIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-tech">
                <span className="tech-label">TECH STACK</span>
                <div className="tech-tags">
                  {project.techStack.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
