import React from 'react';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [products] = useProducts([]);
    const handleDelete = id =>{
        console.log("Delete the Product", id)
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Total product available now : {products.length}</h2>
            {
                products.map(product => 
                    <ul product={product} key={product._id}>
                        <li>Name : {product.name} ; Price : $ {product.Price} ; Quantity : {product.Quantity} .
                        <div>
                            <button onClick={()=>handleDelete(product._id)} className='btn btn-danger'>X</button>{" "}
                            <button className='btn btn-info'>Update</button>
                        </div>
                        </li>
                    </ul>
                    )
            }

        </div>
    );
};

export default Products;