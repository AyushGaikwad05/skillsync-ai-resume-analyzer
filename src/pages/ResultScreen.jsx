import './ResultScreen.css';
import { useLocation, useNavigate } from 'react-router';

export default function ResultScreen() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div style={{ textAlign: 'center' }} className="result-container">
        <h2>No analysis data found</h2>
      </div>
    );
  }

  const {
    atsScore,
    matchingSkills = [],
    missingSkills = [],
    suggestions = []
  } = state;

  /* =========================
     ATS VERDICT LOGIC
  ========================= */
  let verdictText = '';
  let verdictClass = '';

  if (atsScore >= 85) {
    verdictText = 'Excellent Match';
    verdictClass = 'excellent';
  } else if (atsScore >= 65) {
    verdictText = 'Good Match';
    verdictClass = 'good';
  } else {
    verdictText = 'Needs Improvement';
    verdictClass = 'poor';
  }

  /* =========================
     SECTION-WISE SCORE LOGIC
  ========================= */
  const skillScore = Math.min(100, matchingSkills.length * 10);
  const missingPenalty = missingSkills.length * 5;
  const keywordScore = Math.max(60, atsScore - missingPenalty);

  return (
    <div className="result-container">

      <h1 className="result-title">Your Resume Analysis</h1>

      {/* ATS SCORE */}
      <div className="score-section">
        <div className="score-circle">
          <span className="score-value">{atsScore}%</span>
          <span className="score-label">ATS Match</span>
        </div>

        {/* ATS VERDICT BADGE */}
        <div className={`ats-verdict ${verdictClass}`}>
          {verdictText}
        </div>
      </div>

      {/* SECTION-WISE SCORE */}
      <div className="section-score">
        <h2>Section-wise Match</h2>

        <div className="score-row">
          <span>Skills Match</span>
          <span>{skillScore}%</span>
        </div>

        <div className="score-row">
          <span>Keyword Match</span>
          <span>{keywordScore}%</span>
        </div>

        <div className="score-row">
          <span>Overall ATS</span>
          <span>{atsScore}%</span>
        </div>
      </div>

      {/* SKILLS */}
      <div className="skill-section">

        <div className="skill-card success">
          <h3>Matching Skills</h3>
          <ul>
            {matchingSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card warning">
          <h3>Missing Skills</h3>

          {missingSkills.length === 0 ? (
            <p className="no-missing">🎉 No major skill gaps found</p>
          ) : (
            <ul>
              {missingSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          )}
        </div>

      </div>

      {/* AI SUGGESTIONS */}
      <div className="suggestion-section">
        <h2>AI Suggestions</h2>
        <ul>
          {suggestions.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
