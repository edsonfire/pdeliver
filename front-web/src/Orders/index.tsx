import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { OrderlocationData, Product } from './Types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';


type Props ={
        onSelectProduct: (product: Product)=> void;
    }
    


function Orders(){
const [products, setProducts] = useState<Product[]>([])
const [orderLocation, setOrderLocation] = useState<OrderlocationData>();   
        useEffect(()=>{
                        fetchProducts()
                        .then(reponse => setProducts(reponse.data))
                        .catch(error=> console.log(error))


        }, []);

        const handleSelectProduct = (product: Product) => {
                const isAlreadySelected = selectedProducts.some(item => item.id === product.id);
              
                if (isAlreadySelected) {
                  const selected = selectedProducts.filter(item => item.id !== product.id);
                  setSelectedProducts(selected);
                } else {
                  setSelectedProducts(previous => [...previous, product]);
                }
              }
              
              
    return (
        <>
        <div className="orders-container">
              
                <StepsHeader></StepsHeader>
                <ProductsList  products={products} ></ProductsList>
                <OrderLocation onChangeLocation={location=>setOrderLocation(location)}></OrderLocation>
                <OrderSummary></OrderSummary>
        </div>

        </>
        )
}

export default Orders;