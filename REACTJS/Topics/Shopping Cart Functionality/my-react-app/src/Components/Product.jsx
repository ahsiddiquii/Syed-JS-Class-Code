import React from 'react';
import { Products } from '../ProdutsData/Products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Config/ReduxConfig/Reducers/CartSlice';

const Product = () => {
    const dispatch = useDispatch();
    const add = (item) => {
        dispatch(addToCart({
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            description: item.description,
        }))
    }
    return (
        <>
            <div>
                {Products && Products.length > 0 ? Products.map((item, index) => {
                    return (
                        <>
                            <div key={item.id}>
                                <h2>Title: {item.title}</h2>
                                <h2>ID: {item.id}</h2>
                                <h2>Price: {item.price}</h2>
                                <h2>Description: {item.description}</h2>
                                <button onClick={() => add(item)}>Add to Cart</button>
                            </div>
                        </>

                    )
                }) : "Products Not Found"}

            </div>
        </>
    )
}

export default Product;