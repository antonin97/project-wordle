import React from "react";

function TextInput({ handleGuess, gameOutcome }) {
    const [currentGuess, setCurrentGuess] = React.useState("");

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(event) => {
                event.preventDefault();
                if (currentGuess.length !== 5) {
                    return;
                }
                handleGuess(currentGuess);
                setCurrentGuess("");
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                disabled={gameOutcome !== 0}
                type="text"
                value={currentGuess}
                onChange={(event) => {
                    let input = event.target.value;
                    if (input.length > 5) {
                        return;
                    }
                    if (!input.match(/^[a-zA-Z]{0,5}$/)) {
                        return;
                    }
                    input = input.toUpperCase();
                    setCurrentGuess(input);
                }}
            />
        </form>
    );
}

export default TextInput;
