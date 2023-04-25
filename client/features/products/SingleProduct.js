import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { changeQuantityAsync, fetchCart } from "../cart/cartSlice";
import { selectCategory } from "../categories/allCategoriesSlice";
import { getSingleProduct, selectSingleProduct } from "./singleProductSlice";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const categories = useSelector(selectCategory);
    const product = useSelector(selectSingleProduct);

    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [dispatch])

    const handleAddToCart = async (id) => {
        try {
        const action = await dispatch(getSingleProduct(id))
        const product = action.payload
        // console.log('singleproduct, product:', product)
        // const cart = await dispatch(fetchCart())
        // console.log('cart payload:' , cart.payload)
        // for (const item of cart.payload) {
        //     if (item.product.id) {
        //         console.log('item exists already', item)
        //         await dispatch(changeQuantityAsync({ item, numToChangeBy: 1 }))
        //         console.log("dispatched changequantity")
        //     }
        // }
        const addToCartAction = await dispatch(changeQuantityAsync({product, newQuantity: 1, numToChangeBy: 1}))
        // const updatedCart = addToCartAction.payload;
        // console.log("updatedCart", updatedCart);
        } catch (err) {
            console.log('error adding to cart in single product', err)
        }
    }


    return (
        <>
            <div key={id}>
                    <h2>{product.productName}</h2>
                    <img src={product.imageUrl} />
                    <p><b>Price: $</b> {product.productPrice}</p>
                    <p><b>Description: </b> {product.description}</p>
                    <p>
                        <b>Category: </b>
                        <br />
                            <Link to={`/categories/${product.categoryId}`}>
                            </Link>
                    </p>

                    <button onClick={() => handleAddToCart(id)}>Add to cart</button>
            </div>
        </>
    );
}

export default SingleProduct;
