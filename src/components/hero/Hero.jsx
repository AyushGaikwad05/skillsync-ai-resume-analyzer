import './../hero/hero.css'
import heroimg from '././../../assets/gifs/Recruiter Hiring.gif'; 
import { Route,Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';
export default function Hero() {

    const navigate=useNavigate(); 

    const handleOnClick=()=>{
        navigate("/upload"); 
    }

  return (
    <>
        <section id='hero-section'>
            <div id='left-section'>
                    <h1>
                        AI <span style={{color:'#E5BA41'}}> Resume </span>Analysis for your <span style={{color:'#E5BA41'}}>Career</span> Development 
                    </h1>
                    <p>
                         Upload your resume and paste the job description to instantly get an ATS score,
                        skill match insights, and AI-powered suggestions to improve your chances of getting shortlisted.
                    </p>

                    <button id='start-button' onClick={handleOnClick}>Get Started ➜</button>
            </div>

            <div id='right-section'>
                <img src={heroimg} id='hero-img' alt="" />
            </div>
        </section>
        
    
    </>
 
  );
}
