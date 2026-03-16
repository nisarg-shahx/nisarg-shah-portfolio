import "./styles/TechStack.css";

const TechStack = () => {
  const techCategories = [
    {
      category: "DATA & ANALYTICS",
      technologies: [
        { name: "Python", icon: "/images/python.png" },
        { name: "AWS Redshift", icon: "/images/aws-redshift.png" },
        { name: "Tableau", icon: "/images/tableau.png" },
        { name: "AWS Athena", icon: "/images/aws-athena.png" },
        { name: "Power BI", icon: "/images/powerbi-new.png" },
      ],
    },
    {
      category: "AI & MACHINE LEARNING",
      technologies: [
        { name: "AWS Bedrock", icon: "/images/bedrock-icon.png" },
        { name: "AWS SageMaker", icon: "/images/sagemaker-aws.png" },
        { name: "Partyrock", icon: "/images/aws.png" },
      ],
    },
    {
      category: "DATA INTEGRATION & PROCESSING",
      technologies: [
        { name: "AWS Glue", icon: "/images/aws-glue.png" },
        { name: "AWS Lambda", icon: "/images/aws-lambda.png" },
        { name: "DataGrip", icon: "/images/datagrip.png" },
      ],
    },
    {
      category: "DATABASES",
      technologies: [
        { name: "PostgreSQL", icon: "/images/postgresql.png" },
        { name: "Microsoft SQL", icon: "/images/mysql.webp" },
        { name: "Amazon RDS", icon: "/images/aws-rds.png" },
      ],
    },
    {
      category: "CLOUD & INFRASTRUCTURE",
      technologies: [
        { name: "AWS", icon: "/images/aws.png" },
        { name: "AWS QuickSight", icon: "/images/aws-quicksight.png" },
        { name: "AWS SES", icon: "/images/aws-ses.png" },
      ],
    },
  ];

  return (
    <div className="techstack">
      <div className="techstack-container">
        <h2 className="techstack-title">MY TECHSTACK</h2>
        
        <div className="tech-categories">
          {techCategories.map((category, idx) => (
            <div key={idx} className="tech-category">
              <h3 className="tech-category-title">{category.category}</h3>
              <div className="tech-grid">
                {category.technologies.map((tech, techIdx) => (
                  <div key={techIdx} className="tech-item">
                    <div className="tech-icon">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                    <span className="tech-name">{tech.name}</span>
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

export default TechStack;
