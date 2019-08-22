import React, { useRef, useEffect, useState } from "react";
import CanvasWaves from "canvas-waves";

const Wave = ({ settings, index }) => {
    const waveRef = useRef(null);

    const [wave, setWave] = useState(null);

    useEffect(() => {
        const wave = CanvasWaves.create(waveRef.current, settings);
        wave.animate();
        setWave(wave);
        return function() {
            wave.destroy();
        };
    }, [settings]);

    return <div className="wave" ref={waveRef} />;
};

export default Wave;
