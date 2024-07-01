import React from 'react'
import "../IntroSection/IntroSection.css"
import GitHubIcon from '@mui/icons-material/GitHub'
import JobImage from "/src/assets/intro-info-head.avif"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import IntroMainImage from "/src/assets/intro-main-img.avif"

export default function IntroSection() {
    return (
        <section className='intro-section'>
            <div className='intro-info'>
                <div className='job-title'>
                    <div className='job-txt'>
                        <img src={JobImage} alt="job-face" />
                        <div className='job-desc'>
                            <h2>Hey, I'm Firdovsi</h2>
                            <p>Frontend Developer</p>
                        </div>
                    </div>
                    <div className='intro-social'>
                        <div className='intro-link'>
                            <LinkedInIcon style={{ color: "#fff", cursor: "pointer" }} />
                        </div>
                        <div className='intro-git'>
                            <GitHubIcon style={{ color: "#fff", cursor: "pointer" }} />
                        </div>
                        <button>Get In Touch</button>
                    </div>
                </div>
                <div className='intro-main-txt'>
                    <h3>Obssed with creating modern and responsive User Interfaces of Websites.</h3>
                    <p>Hey, I'm Firdovsi, welcome to my world. I love creating modern, responsive and creative user interfaces for Websites using modern library React JS.</p>
                </div>
            </div>
            <div className='intro-profile-img'>
                <img src={IntroMainImage} alt="" />
                <span className='first-child' />
                <span className='second-child' />
                <span className='third-child' />
                <span className='fourth-child' />
                <span className='fifth-child' />
                <span className='sixth-child' />
                <span className='seventh-child' />
                <span className='eighth-child' />
                <span className='ninth-child' />
                <span className='tenth-child' />
                <span className='eleven-child' />
                <span className='twelve-child' />
                <span className='thirteen-child' />
                <span className='fourteen-child' />
                <span className='fifteen-child' />
                <span className='sixteen-child' />
                <span className='seventeen-child' />
                <span className='eighteen-child' />
                <span className='nineteen-child' />
                <span className='twenty-child' />
                <span className='tone-child' />
                <span className='ttwo-child' />
                <span className='tthree-child' />
                <span className='tfour-child' />
                <span className='tfive-child' />
            </div>
        </section>
    )
}