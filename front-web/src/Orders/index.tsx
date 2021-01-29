import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { OrderlocationData, Product } from './Types';
import { fetchProducts, saveorder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import { checkIsSelected } from './helpers';
import { toast } from 'react-toastify';



type Props ={
        onSelectProduct: (product: Product)=> void;
    }
    


function Orders(){
const [products, setProducts] = useState<Product[]>([]);
const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
const [orderLocation, setOrderLocation] = useState<OrderlocationData>();   
const totalPrice = selectedProducts.reduce((sum,item)=> {
        return sum +item.price;
},0);
        useEffect(()=>{
                        fetchProducts()
                        .then(reponse => setProducts(reponse.data))
                        .catch(error=> {
                                
                                toast.warning('Erro ao listar os produtos')
                        })


        }, []);

        const handleSelectProduct = (product: Product) => {
                const isAlreadySelected = checkIsSelected(selectedProducts, product);
              
                if (isAlreadySelected) {
                  const selected = selectedProducts.filter(item => item.id !== product.id);
                  setSelectedProducts(selected);
                } else {
                  setSelectedProducts(previous => [...previous, product]);
                }
              }
              



              const handleSubmit = () => {
                const productsIds = selectedProducts.map(({ id }) => ({ id }));
                const payload = {
                  ...orderLocation!,
                  products: productsIds
                }
              
                saveorder(payload).then((response) => {
                  toast.error(`Pedido enviado com sucesso! nº ${response.data.id}`);
                  setSelectedProducts([]);
                })
                  .catch(() => {
                    toast.warning('Erro ao enviar pedido');
                  })
              }
              


              
    return (
        <>
        <div className="orders-container">
              
                <StepsHeader></StepsHeader>
                <ProductsList  
                        products={products} 
                        onSelectProduct={handleSelectProduct}
                        selectedProducts={selectedProducts}
                        ></ProductsList>
                <OrderLocation onChangeLocation={location=>setOrderLocation(location)}></OrderLocation>
                <OrderSummary amount={selectedProducts.length} totalPrice={totalPrice}  onSumit={handleSubmit}></OrderSummary>
        </div>

        </>
        )
}

export default Orders;