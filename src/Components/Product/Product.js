import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, img, description, price, stock,quantity, seller } = product;
    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <p>Seller: {seller}</p>
            <p><small>Quantity : {quantity}</small></p>
            <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'>Manage: {name}</button>
        </div>
    );
};

export default Product;