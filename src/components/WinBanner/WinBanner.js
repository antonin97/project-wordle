import React from "react";
import Banner from "../Banner";
import RestartButton from "../RestartButton";

function WinBanner({ numOfGuesses, restart }) {
    return (
        <Banner type="happy">
            <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>
                    {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
                </strong>
            </p>
            <RestartButton restart={restart} />
        </Banner>
    );
}

export default WinBanner;
