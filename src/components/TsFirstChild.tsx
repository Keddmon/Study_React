import React from "react";
import useTsStore from "../store/ts_store.ts";

function TsFirstChild() {
    const setSelectedButton = useTsStore((state) => state.setSelectedButton);
    const incrementCount = useTsStore((state) => state.incrementCount);
    const removeCount = useTsStore((state) => state.removeCount);

    const handleClick = (button: string) => {
        setSelectedButton(button);
    };

    return (
        <div>
            <h1>TsFirstChild</h1>
            <div>
                <button onClick={() => handleClick("O")}>O</button>
                <button onClick={() => handleClick("X")}>X</button>
            </div>
            <div>
                <button onClick={incrementCount}>카운트 증가</button>
                <button onClick={removeCount}>카운트 리셋</button>
            </div>
        </div>
    )
}

export default TsFirstChild;