import * as React from "react";
import { useNavigate } from 'react-router-dom';
import './Topbar.css';
import Head from './Files/AnthonyHead.png';

export default function TopBar() {
    const navigate = useNavigate();

    return (
        <div className="topbar-container">
            <div style={{ display: 'flex', gap: '20px', alignItems: 'left', justifyContent: 'center', width: '100%' }}>
                <img src={Head} onClick={() => navigate('/')} className="MyHead" alt="My Head"/>

                <nav style={{ flex: 1 }}>
                    <ul style={{ display: 'flex', justifyContent: 'left', gap: '2rem', padding: 20, margin: 0 }}>
                        <a className="nav-link" onClick={() => navigate('/')}>Home</a>
                        <a className="nav-link" onClick={() => navigate('/projects')}>Projects</a>
                        <a className="nav-link" onClick={() => navigate('/resume')}>Resume</a>   
                    </ul>
                </nav>
            </div>
        </div>
    );
}