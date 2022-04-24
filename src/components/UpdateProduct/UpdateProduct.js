import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';


const UpdateProduct = () => {
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/update/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            console.log("Success :",result);
        })
        
    };

    const [product, setProduct] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/update/${id}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setProduct(data))
    }, [id])



    return (
        <div className='w-50 mx-auto my-4'>
            <h2>Product Name : {product.name}</h2>
            <h2>Product Price : $ {product.Price}</h2>
            <h2>Product Quantity : {product.Quantity}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Product Name' type="text" {...register("name")} />
                <br />
                <input className='mb-2' placeholder='Product Price' type="number" {...register("Price")} />
                <br />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("Quantity")} />
                <br />
                <input className='btn btn-primary' type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateProduct;