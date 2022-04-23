import React from 'react';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [products] = useProducts([]);
    return (
        <div className='w-50 mx-auto'>
            <h2>Total product available now : {products.length}</h2>
            {
                products.map(product => 
                    <ul product={product} key={product._id}>
                        <li>Name : {product.name} ; Price : $ {product.Price} ; Quantity : {product.Quantity} .</li>
                    </ul>
                    )
            }

        </div>
    );
};

export default Products;