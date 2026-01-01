import './../cards/card.css';

export default function Card() {
  return (
    <>
      <h1 className="card-title">Our Features</h1>

      <div id="card-container">

        {/* Card 1 */}
        <div className="card-section">
          <div className="card-icon">📄</div>

          <h3>Smart Resume Analysis</h3>

          <p className="card-desc">
            Understand how your resume performs with ATS systems.
          </p>

          <ul className="card-list">
            <li>ATS score calculation</li>
            <li>Keyword optimization</li>
            <li>Missing skill detection</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="card-section">
          <div className="card-icon">📊</div>

          <h3>Job Match Insights</h3>

          <p className="card-desc">
            Compare your resume directly with the job description.
          </p>

          <ul className="card-list">
            <li>Skill match analysis</li>
            <li>Experience level match</li>
            <li>Role suitability score</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="card-section">
          <div className="card-icon">✨</div>

          <h3>AI Resume Suggestions</h3>

          <p className="card-desc">
            Improve your resume with AI-powered recommendations.
          </p>

          <ul className="card-list">
            <li>Bullet-point improvements</li>
            <li>ATS-friendly keywords</li>
            <li>Content optimization tips</li>
          </ul>
        </div>

      </div>
    </>
  );
}
