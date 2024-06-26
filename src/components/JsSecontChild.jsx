import React from "react";
import useJsStore from "../store/js_store";

function JsSecondChild() {
    const selectedButton = useJsStore((state) => state.selectedButton);
    const count = useJsStore((state) => state.count);

    return (
        <div>
            <h1>JsSecondChild</h1>
            <p>카운트: {count}</p>
            <p>선택한 버튼: {selectedButton}</p>
        </div>
    );
}

export default JsSecondChild;