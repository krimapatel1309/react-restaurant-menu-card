import React, { useState } from "react";

import Menu from "./component/Menu";
import Buttons from './component/Buttons';
import Item from './component/Item';

import "./App.css";

const allcatValue = [...new Set(Menu.map((curelem) =>  curelem.category)), "all"];
console.log(allcatValue);

const App = () => {
    const [items, setItems] = useState(Menu);

    const filterItem = (categItem) => {

		console.log(categItem.elem);
		if(categItem.elem === "all") {
			console.log("in all" + categItem);
			setItems(Menu);
			return;
		}
        const updatedItems = Menu.filter((curElem) => {
            console.log(curElem);
            return curElem.category === categItem.elem;
        });
        console.log("..."+ updatedItems);
        setItems(updatedItems);
    };

    return (
        <>
            <h1 className="mt-5 text-center main-heading">
                Order Your Favourite Dish
            </h1>
            <hr />

			<Buttons filterItem={filterItem} allcatValue={allcatValue} />

            {/* my main items section  */}
            <div className="menu-items container-fluid mt-2">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row mx-3">
                            {
								items.map((elem, ind) => <Item elem={elem} key={ind} />)
							};
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
