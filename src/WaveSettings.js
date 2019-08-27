import React from "react";

const WaveSettings = ({ settings, changeSettings, deleteWave, index }) => {
    const changeSpeed = e => {
        changeSettings({ ...settings, speed: e.target.value }, index);
    };

    const changeSetting = e => {
        changeSettings({ ...settings, [e.target.name]: e.target.value }, index);
    };

    return (
        <div className="settings__wave">
            <h2>Wave {index}</h2>
            <h4>baseHeight: {settings.baseHeight}</h4>
            <input
                min="0"
                max="100"
                step="1"
                value={settings.baseHeight}
                name="baseHeight"
                type="range"
                onChange={changeSetting}
            />
            <h4>Node count: {settings.nodeCount}</h4>
            <input
                min="2"
                max="100"
                type="range"
                value={settings.nodeCount}
                name="nodeCount"
                step="1"
                onChange={changeSetting}
            />
            <h4>Speed: {settings.speed}ms</h4>
            <input
                min="1000"
                max="20000"
                type="range"
                value={settings.speed}
                name="speed"
                step="100"
                onChange={changeSpeed}
            />
            <h4>waveAngle: {settings.waveAngle}</h4>
            <input
                min="-89"
                max="89"
                step="1"
                value={settings.waveAngle}
                name="waveAngle"
                type="range"
                onChange={changeSetting}
            />
            <h4>waveGrows: {settings.waveGrows}</h4>
            <input
                min="0"
                max="2"
                step=".1"
                value={settings.waveGrows}
                name="waveGrows"
                type="range"
                onChange={changeSetting}
            />
            <h4>opacity: {settings.opacity}</h4>
            <input
                min="0"
                max="1"
                step=".1"
                value={settings.opacity}
                name="opacity"
                type="range"
                onChange={changeSetting}
            />
            <button onClick={() => deleteWave(index)}>Delete</button>
        </div>
    );
};

export default WaveSettings;
