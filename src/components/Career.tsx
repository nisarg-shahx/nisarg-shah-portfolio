import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. Solution Architect</h4>
                <h5>TechSperia</h5>
              </div>
              <h3>2013</h3>
            </div>
            <p>
              Digital consultancy providing IT solutions including websites, mobile apps, and web applications. Reviewed business requirements and designed technology solutions aligned with enterprise architecture. Served clients across India, Australia, and Germany.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BI Reports Developer</h4>
                <h5>Oticon USA</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Acted as liaison between business users and BI development team. Owned and maintained dashboard library. Managed key business solution migration resulting in 75% reduction in Flash report creation, saving 400+ hours annually.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Intelligence Analyst</h4>
                <h5>Oticon USA</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Built and maintained data pipelines across finance, operations, logistics, and marketing systems. Designed and developed interactive BI solutions using Microsoft Power BI, Tableau, and AWS QuickSight. Improved data flow processes ensuring accuracy and quality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Business Intelligence Analyst</h4>
                <h5>Oticon USA</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Defined and delivered BI strategies and roadmaps. Worked with stakeholders on reporting requirements using SQL, Power BI, and SQL Server. Maintained ETL solutions and extensive automated report library.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Intelligence Engineer II</h4>
                <h5>Amazon</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Owned and designed scalable BI solutions for metrics, reports, and dashboards. Leveraged data mining, modeling, and warehousing on multi-terabyte datasets. Implemented automated data pipelines using AWS S3, Lambda, and SFTP, saving 10+ hours weekly.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Business Intelligence Engineer</h4>
                <h5>Amazon</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Led tiger team initiatives and developed high-level reports for leadership. Delivered 140+ analytics dashboards spanning data strategy, KPI frameworks, and real-time operational insights. Collaborated with cross-functional teams on data extraction and transformation using Redshift and Amazon Data Lake.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Intelligence Manager</h4>
                <h5>Amazon</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading a team of 6 BI Engineers designing AI-driven architectures and products. Designed AI infrastructure for Amazon Transportation Services unlocking $40M+ annual business impact. Built suite of AI products including Computer Vision, Auto Summarization, and Agentic workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
