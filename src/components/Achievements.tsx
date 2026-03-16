import "./styles/Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      icon: "📈",
      metric: "$40M+",
      label: "UNLOCKED",
      title: "Annual Business Impact",
      description: "Designed the foundation of AI-driven products at scale for Amazon Transportation Services."
    },
    {
      icon: "🎯",
      metric: "15%",
      label: "IMPROVEMENT",
      title: "Defect Attribution Accuracy",
      description: "Led global initiative resulting in significant accuracy gains while conserving hundreds of hours of manual analysis."
    },
    {
      icon: "⚡",
      metric: "75%",
      label: "REDUCTION",
      title: "Flash Report Automation",
      description: "Reduction in Flash report creation through AI driven bridges saving 400+ hours annually per program leader."
    },
    {
      icon: "📊",
      metric: "140+",
      label: "DELIVERED",
      title: "Analytics Dashboards",
      description: "Delivered analytics dashboards spanning data strategy, KPI frameworks, and real-time operational insights."
    },
    {
      icon: "👥",
      metric: "6",
      label: "ENGINEERS",
      title: "Team Leadership",
      description: "Leading a high-performing team of Business Intelligence Engineers fostering innovation and technical excellence."
    },
    {
      icon: "📝",
      metric: "20+",
      label: "WHITE PAPERS",
      title: "Technical Documentation",
      description: "Authored comprehensive white papers on AI Architecture, Tech Proposals, and Operational Planning. Contributed to 50+ internal document reviews."
    }
  ];

  return (
    <div className="achievements-section" id="achievements">
      <div className="achievements-container">
        <h2>
          Key <span>Achievements</span>
        </h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-metric">
                <span className="metric-value">{achievement.metric}</span>
                <span className="metric-label">{achievement.label}</span>
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
