import { BsChatDotsFill, BsFillBellFill, BsFillPersonFill, BsExclamationCircleFill } from "react-icons/bs";
import "./Navigation.css"; // caso você use um CSS externo

function Navigation() {
  return (
    <nav className="navigation">
      <a href="#sobre" className="nav-item">
        <BsChatDotsFill className="nav-icon" />
        Chat
      </a>

      <a href="#serviços" className="nav-item">
        <BsFillBellFill className="nav-icon" />
        Notificações
      </a>

      <a href="#resultados" className="nav-item">
        <BsFillPersonFill className="nav-icon" />
        Perfil
      </a>

      <a href="#contato" className="nav-item">
        <BsExclamationCircleFill className="nav-icon" />
        Suporte
      </a>
    </nav>
  );
}

export default Navigation;