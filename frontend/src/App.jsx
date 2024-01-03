import { useEffect, useState } from "react";
import './App.css'
import axios from "axios";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("/api/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return ( <
        >
        <
        h2 > How to connect the backend with the frontend < /h2> <
        h3 > Products: { products.length } < /h3>{" "} {
            products.map((product, index) => {
                return ( <
                    div key = { index } >
                    <
                    h2 > { product.name } < /h2> <
                    p > Price: { product.price } < /p> <
                    p > Quantity: { product.quantity } < /p> <
                    /div>
                );
            })
        } <
        />
    );
}

export default App;