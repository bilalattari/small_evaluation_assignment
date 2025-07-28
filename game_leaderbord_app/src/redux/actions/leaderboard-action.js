import { setCartData } from "../slices/cart-slice";

export const addCartQuantity = (cart_items, item) => {
    return async dispatch => {
        let array = [...cart_items]
        let index = array?.findIndex(val => val?.id === item?.id)
        if (index !== -1) {
            array[index] = { ...array[index], quantity: array[index].quantity + 1 }
        } else {
            array.push({ ...item, quantity: 1 })
        }
        dispatch(setCartData(array))
    };
};

export const removeCartQuantity = (cart_items, item) => {
    return async dispatch => {
        let array = [...cart_items]
        let index = array?.findIndex(val => val?.id === item?.id)
        if (index !== -1) {
            if (array[index].quantity > 1) {
                array[index] = { ...array[index], quantity: array[index].quantity - 1 }
            } else {
                array.splice(index, 1)
            }
        }
        dispatch(setCartData(array))


    };
};