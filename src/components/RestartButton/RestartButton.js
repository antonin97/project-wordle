import React from "react";

function RestartButton({ restart }) {
    return (
        <button className="restart-button" onClick={restart}>
            RESTART
        </button>
    );
}

export default RestartButton;
