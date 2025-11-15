
import "../style/inicio.scss";
import { Link } from "react-router";

export default function Inicio() {
    return (
        <div className="Clark">
            <div className="Bem-vindo">
                <h1 className="inria-serif-bold-italic">Bem Vindo ao Clark</h1>
                <img
                    className="Imagem-Entrada"
                    height="450px"
                    src="/src/assets/images/download (6).jpeg"
                    alt=""
                />

                <div className="circleYellow"></div>
                <div className="circulo YP p1"></div>
                <div className="triangulo YP p2"></div>
                <div className="hexagono YP p3"></div>
                <div className="circulo YP p4"></div>
                <div className="triangulo YP p5"></div>

                <div className="div-btn">
                    <button className="inria-serif-regular btn">
                        <Link to={"#"}>ENTRAR</Link>
                    </button>

                    <button className="inria-serif-regular btn">
                        <Link to={"./escolha"}>CADASTRAR</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}


