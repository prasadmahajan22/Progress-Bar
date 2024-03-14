import React, { useEffect, useState } from "react";

export default function Progressbar({ value = 0 }) {
    const [percent, setPercent] = useState(value);
    const [loadingMessage, setLoadingMessage] = useState("loading...");

    useEffect(() => {
        if (percent < 100) {
            const timer = setTimeout( ()=>setPercent(newval=>newval+1),200);
            return () => clearTimeout(timer); // clean up on re-render
        }
    }, [percent]);

    return (
        <React.Fragment>
            <div className="progressbar">
                <div className="progressbarfill" style={{ width: `${percent}%` }}> {percent} % </div>
            </div>
            <div className="loading">{loadingMessage}</div>
        </React.Fragment>
    );
}