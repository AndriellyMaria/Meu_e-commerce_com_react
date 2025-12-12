// src/components/ProductDetails.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const docRef = doc(db, "produtos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
          setError(null);
        } else {
          setError("Produto não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        setError("Erro ao carregar produto. Tente novamente.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Carregando produto...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div>Produto não encontrado.</div>;

  return (
    <div className="product-details">
      <div className="product-images">
        {product.imagens && product.imagens.length > 0 ? (
          <Carousel fade interval={3000}>
            {product.imagens.map((img, index) => (
              <Carousel.Item key={index}>
                <img src={img} alt={`${product.nome} ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <img src="/placeholder.jpg" alt={product.nome} />
        )}
      </div>

      <div className="product-info">
        <h1>{product.nome}</h1>
        <p className="price">R$ {product.preco?.toFixed(2)}</p>
        <p className="description">{product.descricao}</p>
        
        {product.quantidade && (
          <p className="stock">
            <strong>Estoque:</strong> {product.quantidade} unidades
          </p>
        )}

        <div className="action-buttons">
          <button 
            className="buy-now" 
            onClick={() => { 
              addToCart(product); 
              navigate("/checkout"); 
            }}
          >
            Comprar Agora
          </button>

          <button 
            className="add-to-cart" 
            onClick={() => { 
              addToCart(product); 
              navigate("/carrinho"); 
            }}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}