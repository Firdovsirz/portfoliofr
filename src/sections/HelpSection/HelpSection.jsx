import React from 'react'
import "../HelpSection/HelpSection.css"
import EastIcon from '@mui/icons-material/East'
import HelpEmoji from "/src/assets/help-img.avif"

export default function HelpSection() {
    return (
        <section className='help-section'>
            <div className='help-container'>
                <div className='help-txt'>
                    <h2>How can I help <em>you?</em></h2>
                    <div className='help-main-txt'>
                        <p>Want me to build you a completely custom, beautiful & highly-converting landing page?</p>
                        <p>Want me to build you a completely custom, visually-stunning multi-page website?</p>
                    </div>
                    <button>
                        Get In Touch
                        <EastIcon className='help-arrow'/>
                    </button>
                </div>
                <img src={HelpEmoji} alt="" />
            </div>
        </section>
    )
}
