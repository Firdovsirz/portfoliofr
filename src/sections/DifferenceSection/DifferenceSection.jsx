import React from 'react'
import EastIcon from '@mui/icons-material/East'
import "../DifferenceSection/DifferenceSection.css"
import DifferenceImage from "/src/assets/difference.avif"

export default function DifferenceSection() {
    return (
        <section className='difference-section'>
            <div className='difference-container'>
                <div className='difference-profile'>
                    <img src={DifferenceImage} alt="difference-emoji" />
                </div>
                <div className='difference-txt'>
                    <h2>What makes me <em>different?</em></h2>
                    <p>
                        As a frontend developer, I craft unique digital experiences tailored to your brand and goals.
                        By merging creativity with functionality and staying ahead of design trends, I ensure every project
                        not only looks stunning but also performs flawlessly.
                    </p>
                    <button>
                        Browse my Work
                        <EastIcon className='arrow' />
                    </button>
                </div>
            </div>
        </section>
    )
}
