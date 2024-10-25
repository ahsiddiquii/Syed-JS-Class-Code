import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Config/ReduxConfig/Reducers/CartSlice';

const Cart = () => {
    const reduxSelector = useSelector(state => state.CartItems);
    const dispatch = useDispatch();

    const remove = id => {
        dispatch(removeFromCart({
            id: id
        }))
    }
    return (
        <>
            {
                reduxSelector && reduxSelector.length > 0 ? reduxSelector.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <h2>Title: {item.title}</h2>
                            <h2>ID: {item.id}</h2>
                            <h2>Price: {item.price}</h2>
                            <h2>Description: {item.description}</h2>
                            <button onClick={() => remove(item.id)}>Remove From Cart</button>
                        </div>
                    )
                }) : "No Products Found In Cart"
            }
        </>
    )
}

export default Cart