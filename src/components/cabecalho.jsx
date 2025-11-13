import "./cabecalho.scss";
import { Link } from "react-router";

export default function Cabecalho() {
    return (
        <div className="Barra-top">
            <div className="lg">
                <img
                    className="logo2"
                    src="/src/assets/images/Captura_de_tela_2025-10-14_214454-removebg-preview.png"
                    alt=""
                />
            </div>

            <nav className="links">
                <Link to="/entrar">Entrar</Link>
                <Link to="/escolha">Resgistrar</Link>
            </nav>
        </div>
    );
}
