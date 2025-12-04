import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h2>Crio soluções digitais que transformam ideias em realidade</h2>
      <p>Especialista em HTML, CSS e JavaScript. Projetos modernos, responsivos e com performance de ponta.</p>

      <Link to="/store">
        <Button variant="primary">Vamos às compras</Button>
      </Link>
    </section>
  );
}

export default Hero;
