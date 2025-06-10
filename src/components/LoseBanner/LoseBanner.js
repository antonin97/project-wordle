import React from "react";
import Banner from "../Banner";
import RestartButton from "../RestartButton";

function LoseBanner({ answer, restart }) {
    return (
        <Banner type="sad">
            <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
            <RestartButton restart={restart} />
        </Banner>
    );
}

export default LoseBanner;
