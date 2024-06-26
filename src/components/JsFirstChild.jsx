import React from "react";
import useJsStore from "../store/js_store";

function JsFirstChild() {
    // const setSelectedButton = useStore((state) => state.setSelectedButton);
    // const incrementCount = useStore((state) => state.incrementCount);
    // const removeCount = useStore((state) => state.removeCount);

    // 또는

    const { setSelectedButton, incrementCount, removeCount } = useJsStore((state) => state);

    const handleClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <div>
            <h1>JsFirstChild</h1>
            <div>
                <button onClick={() => handleClick("O")}>O</button>
                <button onClick={() => handleClick("X")}>X</button>
            </div>
            <div>
                <button onClick={incrementCount}>카운트 증가</button>
                <button onClick={removeCount}>카운트 리셋</button>
            </div>
        </div>
    );
}

export default JsFirstChild;