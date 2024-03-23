import {
    GET_CART,
    ADD_TO_CART,
    DELETE_FROM_CART,
    UPDATE_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY
}
    from './cart.type'

export const getCart = () => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }

        return dispatch({ type: GET_CART, payload: cartData.cart });

    } catch (error) {
        return dispatch({ type: "GetCartERROR", payload: error })
    }
};

export const addToCart = (newFood) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }

        cartData.cart.push(newFood);

        localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));

        return dispatch({ type: ADD_TO_CART, payload: cartData.cart });

    } catch (error) {
        return dispatch({ type: "GetCartERROR", payload: error })
    }
}

export const deleteCart = (foodId) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }

        cartData.cart = cartData.cart.filter(({ _id }) => _id !== foodId); //what this does is that using filter method it creates new array by removing id with foodId

        localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));

        return dispatch({ type: DELETE_FROM_CART, payload: cartData.cart });

    } catch (error) {
        return dispatch({ type: "GetCartERROR", payload: error })
    }
};

export const incrementQuantity = (foodId) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }

        cartData.cart = cartData.cart.map((food) =>
            food._id === foodId
                ? {
                    ...food,
                    totalPrice: food.price * (food.quantity + 1),
                    quantity: food.quantity + 1
                }
                : food
        );

        localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));

        return dispatch({ type: INCREMENT_QUANTITY, payload: cartData.cart });

    } catch (error) {
        return dispatch({ type: "GetCartERROR", payload: error })
    }
}

export const decrementQuantity = (foodId) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
            cartData.cart = cart;
        }

        cartData.cart = cartData.cart.map((food) =>
            food._id === foodId
                ? {
                    ...food,
                    totalPrice: food.price * (food.quantity - 1),
                    quantity: food.quantity - 1
                }
                : food
        );

        localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));

        return dispatch({ type: DECREMENT_QUANTITY, payload: cartData.cart });

    } catch (error) {
        return dispatch({ type: "GetCartERROR", payload: error })
    }
}