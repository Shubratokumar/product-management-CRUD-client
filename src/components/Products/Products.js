import React from 'react';
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useProducts([]);
    const navigate = useNavigate();
    const handleDelete = id =>{
        const proceedDelete = window.confirm("Are you sure to delete the product?");
        if(proceedDelete){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
                console.log(data);
            })
        }
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
                            <button onClick={()=> navigate(`/update/${product._id}`)} className='btn btn-info'>Update</button>
                        </div>
                        </li>
                    </ul>
                    )
            }

        </div>
    );
};

export default Products;