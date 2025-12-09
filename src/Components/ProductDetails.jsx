import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Store from "../Components/Store";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // pega a lista de produtos do Store
  const allProducts = Store().props.children.props.children; // evita duplicar lista
  const product = allProducts.find(p => p.id === Number(id));

  if (!product) return <h2>Produto não encontrado</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.images[0]} width="250" />
      <p>Preço: R$ {product.price.toFixed(2)}</p>

      <button onClick={() => { addToCart(product); navigate("/checkout") }}>
        Comprar agora
      </button>

      <button onClick={() => { addToCart(product); navigate("/carrinho") }}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}
