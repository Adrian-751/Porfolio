import './DarkModeSwitch.css';
import { useState, useEffect } from 'react';

const DarkModeSwitch = () => {
    // Estado para controlar el modo oscuro

    const estadoInicial = JSON.parse(localStorage.getItem('dark-mode') || false);
    const [darkMode, setDarkMode] = useState(estadoInicial);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);

        localStorage.setItem('dark-mode', !darkMode)
    }

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

     return (
        <>
            <label className="dark-mode">
                <input type="checkbox" name="dark-mode" id="dark-mode" onChange={toggleDarkMode} />
                <span className={`icono sol ${!darkMode ? 'active' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor"  
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                    </svg>
                </span>
                <span className={`icono luna ${darkMode ? 'active' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        viewBox="0 0 16 16"
                    >
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                    </svg>
                </span>
            </label>
        </>
    )
}

export default DarkModeSwitch;