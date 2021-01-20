import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { Product } from './Types';
import { fetchProducts } from '../api';




function Orders(){
const [products, setProducts] = useState<Product[]>([])
        
        useEffect(()=>{
                        fetchProducts()
                        .then(reponse => setProducts(reponse.data))
                        .catch(error=> console.log(error))


        }, []);

    return (
        <>
        <div className="orders-container">
              
                <StepsHeader></StepsHeader>
                <ProductsList></ProductsList>


        </div>

        </>
        )
}

export default Orders;