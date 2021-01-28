import ProductsCard from "./ProductsCard";
import { Product } from "./Types";
import { checkIsSelected } from "./helpers";

type Props ={
        products : Product[];
        selectedProducts: Product[];
        onSelectProduct: (product: Product)=> void;

    
}


function ProductsList({products,selectedProducts, onSelectProduct}:Props){

    return (
        <>
        <div className="orders-list-container">
                <div className="orders-list-items">
                        {products.map(product=>(
                                <ProductsCard 
                                                onSelectProduct={onSelectProduct} 
                                                key={product.id} 
                                                product={product}
                                                isSelected={checkIsSelected(selectedProducts, product)} ></ProductsCard>
                        )

                        )}
                        
                </div>

        </div>

        </>
        )
}

export default ProductsList;