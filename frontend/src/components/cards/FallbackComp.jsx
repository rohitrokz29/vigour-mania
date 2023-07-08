import React from 'react';
import './fallback.css'
import { useThemeContext } from '../hooks/useThemeContext'

const FallbackComp = () => {
    const { theme } = useThemeContext();

    return (
        <div className={` main-fallback center-item`} style={{backgroundColor:theme==='dark'?'#000':'#ddd'}}>
            <div className="outer-roll center-item ">
                <div className="inner-roll"></div>
            </div>
        </div>
    )
}

export default FallbackComp 
