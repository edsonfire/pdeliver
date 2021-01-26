import ProductsCard from "./ProductsCard";
import { Product } from "./Types";

type Props ={
        products : Product[];
        onSelectProduct: (product: Product)=> void;

    
}


function ProductsList({products, onSelectProduct}:Props){

    return (
        <>
        <div className="orders-list-container">
                <div className="orders-list-items">
                        {products.map(product=>(
                                <ProductsCard onSelectProduct={onSelectProduct} key={product.id} product={product} ></ProductsCard>
                        )

                        )}
                        
                </div>

        </div>

        </>
        )
}

export default ProductsList;