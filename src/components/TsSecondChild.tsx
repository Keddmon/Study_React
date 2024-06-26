import React from "react";
import useTsStore from "../store/ts_store.ts";

function TsSecondChild() {
    const selectedButton = useTsStore((state) => state.selectedButton);
    const count = useTsStore((state) => state.count);

    return (
        <div>
            <h1>TsSecondChild</h1>
            <p>카운트: {count}</p>
            <p>선택한 버튼: {selectedButton}</p>
        </div>
    );
}

export default TsSecondChild;