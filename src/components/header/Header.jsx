import React from 'react';
import "../header/Header.css";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>Intro</li>
                    <li>Difference</li>
                    <li>Work</li>
                    <li>Get In Touch</li>
                </ul>
                <div className='language'>
                    <select name="" id="" className='language-select'>
                        <option value="en">Azərbaycan dili</option>
                        <option value="ru">Pусский язык</option>
                    </select>
                </div>
                <div className='theme'></div>
            </nav>
        </header>
    )
}
