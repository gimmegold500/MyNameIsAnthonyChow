import React from 'react';
import Topbar from '../Topbar.js';

export default function Resume() {
    const pdfFile = '../Pages/AnthonyChow.pdf';
    return (
        <div>
            <div className="pdf-container" style={{ width: '100%', height: 'calc(100vh - 80px)', padding: '20px' }}>
               
                    <p style={{ textAlign: 'center', color: '#666' }}>
                        It appears you don't have a PDF plugin for this browser.
                        You can <a href="../Pages/AnthonyChow.pdf" style={{ color: '#696055' }}>click here to download the PDF file.</a>
                    </p>

                    {/* figure out how to remove this text Above */}

                    
                    <h1 style={{ textAlign: 'center' }}>
                        My Resume (last updated: 2025-03-12)
                    </h1>
                
                <div id="myInfoDiv" seamless="seamless" scrolling="no" 
                    style={{
                        textAlign: 'center', 
                        color: '#666',
                        width:'99%', 
                        height: '100%', 
                        float: 'center',
                        lineHeight: '100%',
                        fontSize: '100%', 
                        fontFamily: 'sans-serif'
                }}>

   
                    <iframe src="https://drive.google.com/file/d/1rK7ubB5E0FyzYl1nk-P7ZLhdQebOvjde/preview#toolbar=0" 
                        seamless="seamless"
                        style={{ 
                            alignItems: 'center',
                            width: '100%', 
                            height: '100%',
                            border: 'none',
                            borderRadius: '1px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <p style={{ textAlign: 'center', color: '#666' }}>
                            It appears you don't have a PDF plugin for this browser.
                            You can <a href="../Pages/AnthonyChow.pdf" style={{ color: '#696055' }}>click here to download the PDF file.</a>
                        </p>
                    </iframe>
                </div>
            </div>    
        </div> 
    );
} 