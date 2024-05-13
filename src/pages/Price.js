import * as React from "react";
import {useState} from "react";
import {services} from "../data/services";
import ItemList from "../components/ItemList";

const Price = () => {
    const [products, setProducts    ] = useState(services);
    return(
        <>
            <div className={"price_page"}>
                <ItemList
                    services={products}
                />
            </div>
        </>
    )
}

export default Price;