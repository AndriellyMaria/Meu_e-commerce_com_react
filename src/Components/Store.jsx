import { useState, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Store.css";

export default function Store() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

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
      id: 4,
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
    },
    {
      id: 5,
      name: "Vestidos de crochê",
      price: 89.90,
      images: [
        "https://i.pinimg.com/736x/99/b1/ac/99b1ac6b8dd92ee0a37ee6fc15a7fe6c.jpg",
        "https://i.pinimg.com/736x/5b/ff/85/5bff851d07953997800dd366dff7bb1a.jpg",
        "https://i.pinimg.com/736x/33/76/e6/3376e6b3e6af45af34be063f3417eba4.jpg",
        "https://i.pinimg.com/736x/84/ac/07/84ac0755a9fd4eebe760be1f9af4df52.jpg",
        "https://i.pinimg.com/1200x/86/f8/83/86f883b6bfac63cbd651f85e62dda95b.jpg",
        "https://i.pinimg.com/736x/ae/e7/11/aee711ee98fa394d3590330dabcbe292.jpg"
      ]
    },
    {
      id: 6,
      name: "Mesa de madeira",
      price: 369.90,
      images: [
        "https://i.pinimg.com/736x/a2/1e/f2/a21ef25d95b9296c76da5258e339e910.jpg",
        "https://i.pinimg.com/1200x/ab/8a/49/ab8a493e45be191a80f6c52f843f2f00.jpg"
      ]
    },
    {
      id: 7,
      name: "Estante de madeira com gavetas",
      price: 359.90,
      images: [
        "https://i.pinimg.com/736x/20/54/ff/2054ffe2f11994c1e8a694b79d3cd6a7.jpg",
        "https://i.pinimg.com/1200x/df/e0/e0/dfe0e037c899e923698a464343669401.jpg",
        "https://i.pinimg.com/736x/eb/60/7c/eb607c50ee001f24c2c915bbfda22cf7.jpg",
        "https://i.pinimg.com/1200x/99/15/cc/9915cc944371f5156163267fe9303271.jpg",
        "https://i.pinimg.com/1200x/53/61/6f/53616f9787b87ddfad76e6756f8f7ef4.jpg"
      ]
    },
    {
      id: 8,
      name: "Mesinha de cabeceira",
      price: 299.90,
      images: [
        "https://i.pinimg.com/736x/8e/5a/6d/8e5a6d576adf716ecc438a76ff4c4e2c.jpg",
        "https://i.pinimg.com/1200x/e1/30/07/e130079289b405c232e805d93c542fb4.jpg",
        "https://i.pinimg.com/736x/83/1a/3c/831a3c64b53c50fc4396051cbf0146fe.jpg",
        "https://i.pinimg.com/736x/9d/24/75/9d24751fbc9b8a2604ad11ee03c2adb6.jpg",
        "https://i.pinimg.com/736x/e9/08/2a/e9082a40e0f69fdb01544a367d4dadcb.jpg",
        "https://i.pinimg.com/736x/0b/bb/47/0bbb4704a348fa658b5e4de4c4625b44.jpg"
      ]
    },
    {
      id: 9,
      name: "Mochilas bordadas a mão",
      price: 100.00,
      images: [
        "https://i.pinimg.com/1200x/4e/fe/77/4efe770b9e8cca8ad960ce97be7d6fde.jpg",
        "https://i.pinimg.com/736x/cf/86/41/cf86412a9d023b8f522e018e79563a65.jpg",
        "https://i.pinimg.com/736x/15/d7/3f/15d73f981fbd5b4a304dc3c890fdaa5e.jpg",
        "https://i.pinimg.com/1200x/1e/7b/ae/1e7bae735927f54593a0c96565f9946c.jpg",
        "https://i.pinimg.com/736x/91/ce/ef/91ceef3893f976f750973cab1cbb2bbb.jpg",
        "https://i.pinimg.com/1200x/a4/65/f8/a465f84f67b2a1e31b80e1ea63cfd2f2.jpg",
        "https://i.pinimg.com/736x/63/56/1b/63561b2a91b250a58850fbff436327cc.jpg",
        "https://i.pinimg.com/736x/2c/7e/de/2c7ede686ce038667d9289a944de30be.jpg",
        "https://i.pinimg.com/1200x/1b/53/b4/1b53b4f4f11ac46b516becd7e8a58b0c.jpg"
      ]
    }
  ]);

  // Comprar Agora ➜ Checkout
  const handleBuyNow = (product) => {
    addToCart(product);
    navigate("/checkout");
  };

  // Adicionar ao carrinho
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/carrinho");
  };

  // Ir para detalhes
  const handleDetails = (product) => {
    navigate(`/produto/${product.id}`);
  };

  return (
    <div className="container">
  <h2 className="title">Produtos Disponíveis</h2>

  <div className="grid">
    {products.map((product) => (
      <div key={product.id} className="card">

        <Carousel fade interval={2500}>
          {product.images.map((img, index) => (
            <Carousel.Item key={index} className="carouselItem">
              <img src={img} alt={product.name} className="image" />
            </Carousel.Item>
          ))}
        </Carousel>

        <h3>{product.name}</h3>
        <p className="price">R$ {product.price.toFixed(2)}</p>

        <div className="buttons">
          <button className="buyNow" onClick={() => handleBuyNow(product)}>
            Comprar Agora
          </button>

          <button className="cart" onClick={() => handleAddToCart(product)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}