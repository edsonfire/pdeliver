
import { Product } from './Types';


type Props ={
    product : Product;
    onSelectProduct: (product: Product)=> void;
}

function formatPrice(price:number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style:'currency',
    currency:'BRL',
    minimumFractionDigits:2})

    return formatter.format(price);
}

function ProductsCard({product, onSelectProduct}:Props){

    return (
        <>
        <div 
        className="order-card-container"
        onClick={() => onSelectProduct(product)}
        >
               <h3 className="order-card-title">
                    {product.name}                  
               </h3>
            <img src={product.imageUri} alt="" className="order-card-image"></img>
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>{product.description}</p>
            </div>
        </div>

        </>
        )
}

export default ProductsCard;