import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = () => {
        const response = axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Error ", err);
            });

            dispatch(selectedProduct(response.data));
    };

    return (
    <div>
        <h1>ProductDetail</h1>
    </div>
    );
};

export default ProductDetail;