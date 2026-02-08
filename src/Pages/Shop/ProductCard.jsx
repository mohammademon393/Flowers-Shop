import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-rose-500 font-medium">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2"
        >
          <FaCartPlus /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
