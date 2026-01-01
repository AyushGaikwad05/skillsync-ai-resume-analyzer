import './../pages/uploadscreen.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function UploadScreen() {
  const navigate = useNavigate();

  const [jobDescription, setJobDescription] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleResultClick() {
    if (!jobDescription || !resumeFile) {
      alert('Please upload resume and enter job description');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('jobDescription', jobDescription);

    try {
      setLoading(true);
const response = await fetch(
  `${import.meta.env.VITE_BACKEND_URL}api/analyze`,
  {
    method: 'POST',
    body: formData
  }
);


      const data = await response.json();

      setLoading(false);

      navigate('/result', { state: data });

    } catch (error) {
      setLoading(false);
      console.error(error);
      alert('Analysis failed');
    }
  }

  return (
    <>
      <div id="header">
        <h1>Upload your resume & job description to get insights</h1>
      </div>

      <section id="input-container">

        {/* LEFT */}
        <div id="left-section">
          <textarea
            id="text-area"
            placeholder="Enter Job Description"
            rows="12"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>

        {/* RIGHT */}
       <div id="right-section-2">
  <div id="file-upload-box">
    <label htmlFor="file-input" className="upload-label">
      Choose Resume
    </label>

    <input
      type="file"
      id="file-input"
      accept=".pdf"
      onChange={(e) => setResumeFile(e.target.files[0])}
    />

    <p className="file-hint">
      {resumeFile ? resumeFile.name : 'PDF only'}
    </p>
  </div>
</div>

      </section>

      <div id="upload-button">
        <button onClick={handleResultClick} disabled={loading}>
          {loading ? 'Analyzing...' : 'Get Result'}
        </button>
      </div>
    </>
  );
}
