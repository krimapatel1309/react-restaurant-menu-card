import React from "react";

const Buttons = ({ filterItem, allcatValue }) => {
    return (
        <>
            <div className="menu-tabs container mt-2">
                <div className="menu-tab d-flex justify-content-around">

                    {
                        allcatValue.map((elem, ind) => <button className="btn btn-warning"
                        onClick={() => filterItem({elem})} key={ind}>{elem}</button>)
                    }
                    {/* <button
                        className="btn btn-warning"
                        onClick={() => filterItem("breakfast")}
                    >
                        Breakfast
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => filterItem("lunch")}
                    >
                        Lunch
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => filterItem("evening")}
                    >
                        Evening
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => filterItem("dinner")}
                    >
                        Dinner
                    </button> */}
                    {/* <button
                        className="btn btn-warning"
                        onClick={() => setItems(Menu)}
                    >
                        All
                    </button> */}
                </div>
            </div>
        </>
    );
};

export default Buttons;
