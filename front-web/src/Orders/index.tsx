import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { Product } from './Types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';




function Orders(){
const [products, setProducts] = useState<Product[]>([])
const [orderLocation, setOrderLocation]   
        useEffect(()=>{
                        fetchProducts()
                        .then(reponse => setProducts(reponse.data))
                        .catch(error=> console.log(error))


        }, []);

    return (
        <>
        <div className="orders-container">
              
                <StepsHeader></StepsHeader>
                <ProductsList  products={products} ></ProductsList>
                <OrderLocation></OrderLocation>

        </div>

        </>
        )
}

export default Orders;