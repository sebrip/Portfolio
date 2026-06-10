import React, { useEffect, useState } from 'react';
import './scrollProgress.scss';

const ScrollProgress = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const doc = document.documentElement;
            const body = document.body;
            const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
            const scrollHeight = (doc.scrollHeight || body.scrollHeight) - doc.clientHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            setWidth(progress);
        };

        handleScroll();
        // capture=true pour aussi capter le scroll du <body> (overflow-y: scroll)
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className="scrollProgressContainer" aria-hidden="true">
            <div className="scrollProgressBar" style={{ width: `${width}%` }} />
        </div>
    );
};

export default ScrollProgress;
