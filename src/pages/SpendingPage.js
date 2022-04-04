import React from "react";
import Control from "../components/Control";
import ListSpending from "../components/ListSpending";
import Walet from "../components/Walet";

function SpendingPage(props) {

    return (
        <div className="add-spending h-full py-1 px-2 flex flex-col grow">
            <Walet />
            <Control />
            <div className="grow h-full overflow-scroll bg-white">
                <ListSpending />
            </div>
        </div>
    )
}

export default SpendingPage