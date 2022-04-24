import React from 'react';
import { useForm } from "react-hook-form";


const Home = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result =>{
            console.log("Success: ", result)
        })

    };
    return (
        <div className='w-50 mx-auto my-4'>
            <h2>Add New Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Product Name' type="text" {...register("name")} />
                <br />
                <input className='mb-2' placeholder='Product Price' type="number" {...register("Price")} />
                <br />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("Quantity")} />
                <br />
                <input className='btn btn-primary' type="submit" value="Add Product" />
            </form>            
        </div>
    );
};

export default Home;