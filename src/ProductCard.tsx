import { Product } from "./types/Product"

const ProductCard = ({ product }: { product: Product | undefined }) => {
    return (
        product ? (
            <div className="product-info">
                <img src={product.image} className="product-image" />
                <div className="product-details">
                    <p>ID: {product.id}</p>
                    <p>Name: {product.name}</p>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                </div>
            </div>
        ) : (
            <p className="error">No product found with the given name</p>
        )
    )
}

export default ProductCard
