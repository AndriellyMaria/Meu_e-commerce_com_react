import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Store() {
  const [products] = useState([
    {
      id: 1,
      name: "Anéis fofos (biscuit) sortidos unid:",
      price: 2.50,
      images: [
        "https://i.pinimg.com/736x/93/b4/70/93b4700bd9ca2b7f56cb374bc6ced2eb.jpg",
        "https://i.pinimg.com/1200x/12/8c/57/128c5791e0189bb78ad3bb0b42e92ca0.jpg",
        "https://i.pinimg.com/1200x/8c/96/9d/8c969d84c2a6a87fb88328ee2aa13d50.jpg"
      ]
    },
    {
      id: 2,
      name: "Personagem (biscuit) personalizado a partir de:",
      price: 120.00,
      images: [
        "https://i.pinimg.com/736x/11/28/b0/1128b0146233ff3bd9d12d552585b117.jpg",
        "https://i.pinimg.com/736x/82/f0/db/82f0dbb7df332ba4623a8987cd9cddae.jpg",
        "https://i.pinimg.com/736x/9f/06/d3/9f06d3d01a52dd0a08f104d6ae9c7b91.jpg",
        "https://i.pinimg.com/736x/82/e7/2a/82e72abcaa08c1d4dbce4aafb4a446e0.jpg",
        "https://i.pinimg.com/1200x/6e/29/da/6e29da4320e49f55950c0916f93b7fdf.jpg"
      ]
    },
    {
      id: 3,
      name: "Porta escovas de dentes (biscuit)",
      price: 20.00,
      images: [
        "https://i.pinimg.com/1200x/d9/b6/05/d9b605ca564cf46481897ada34438c62.jpg",
        "https://i.pinimg.com/1200x/ef/07/9d/ef079dd2b08ff3073e889a03b8eb564b.jpg",
        "https://i.pinimg.com/736x/65/a2/bb/65a2bb58aa650f9fd173322f1e984aad.jpg",
         "https://i.pinimg.com/736x/28/c2/85/28c285b7e918bd758256b5064f60ed33.jpg",
          "https://i.pinimg.com/1200x/36/fd/8b/36fd8bbc9dba5fc2d3d2b5b7243603d6.jpg",
           "https://i.pinimg.com/736x/dc/d9/6b/dcd96bdb8d8110f0eca8f17fde878c6d.jpg"
      ]
    },
    {
      id: 3,
      name: "Chaveiros fofos para presente (crochê)",
      price: 5.00,
      images: [
        "https://i.pinimg.com/736x/9b/3e/03/9b3e039e6cb836a9be3eaff9eb3641b2.jpg",
        "https://i.pinimg.com/736x/cb/fd/dd/cbfddde26ad0fc895407998edc9c9bb3.jpg",
        "https://i.pinimg.com/1200x/3c/d9/75/3cd97542b8e87acfc386732513dd29ac.jpg",
        "https://i.pinimg.com/1200x/93/b0/b2/93b0b2ec1f410b26084308aad44df6cc.jpg",
        "https://i.pinimg.com/736x/ff/34/39/ff34396a30b0c3ea1db5eb87f2565d46.jpg",
        "https://i.pinimg.com/736x/c1/97/0d/c1970dad4edf72496675546fa4a2e48d.jpg"
      ]
    }
  ]);

  const handleBuyNow = (product) => {
    alert(`Compra iniciada: ${product.name}`);
  };

  const handleAddToCart = (product) => {
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Produtos Disponíveis</h2>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>

            {/* Carrossel */}
            <Carousel fade interval={2500}>
              {product.images.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={img}
                    alt={product.name}
                    style={styles.image}
                  />
                </Carousel.Item>
              ))}
            </Carousel>

            <h3>{product.name}</h3>
            <p style={styles.price}>R$ {product.price.toFixed(2)}</p>

            <div style={styles.buttons}>
              <button
                style={styles.buyNow}
                onClick={() => handleBuyNow(product)}
              >
                Comprar Agora
              </button>

              <button
                style={styles.cart}
                onClick={() => handleAddToCart(product)}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  buyNow: {
    padding: "10px",
    background: "#6c63ff",
    border: "none",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
  cart: {
    padding: "10px",
    background: "#ff6b6b",
    border: "none",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
};
