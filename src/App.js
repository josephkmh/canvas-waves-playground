import React, { useState } from "react";
import "./App.css";

import Wave from "./Wave";
import WaveSettings from "./WaveSettings";
import DemoSidebar from "./DemoSidebar";
import baseSettings from "./baseSettings";

const App = () => {
    const [settings, updateSettings] = useState([{ ...baseSettings }]);

    const changeSettings = (newSettings, index) => {
        const allNewSettings = settings.map((settings, i) => {
            if (i === index) {
                return newSettings;
            }
            return settings;
        });
        updateSettings(allNewSettings);
    };

    const deleteWave = index => {
        console.log("delete " + index);
        const waves = settings.filter((settings, i) => {
            return i !== index;
        });
        updateSettings(waves);
    };

    console.log(settings);

    return (
        <div className="App">
            <h1 className="title">CanvasWaves.js</h1>
            <div className="waves">
                {settings.map((waveSettings, i) => (
                    <Wave key={i} settings={waveSettings} index={i} />
                ))}
            </div>

            <div className="settings">
                <DemoSidebar>
                    {settings.map((waveSettings, i) => (
                        <WaveSettings
                            key={i}
                            settings={waveSettings}
                            index={i}
                            changeSettings={changeSettings}
                            deleteWave={deleteWave}
                        />
                    ))}
                    <button
                        onClick={() =>
                            updateSettings([...settings, { ...baseSettings }])
                        }
                    >
                        Add wave
                    </button>
                </DemoSidebar>
            </div>
        </div>
    );
};

export default App;
