import { BrowserRouter, Route, Routes } from "react-router";

import Inicio from "./pages/inicio";
import Escolha from "./pages/escolha";
import Chat from "./pages/chat";
import Entrar from "./pages/entrar";
import Redefinir from "./pages/redefinir";
import Perfil from "./pages/perfil";
import Procura from "./pages/procura";
import Registrar from "./pages/registrar";
import Registrar2 from "./pages/registrar2";
import Registrar3 from "./pages/registrar3";
import Cabecalho from "./components/cabecalho";

export default function Navegar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/escolha" element={<Escolha />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/entrar" element={<Entrar />} />
                <Route path="/redefinir" element={<Redefinir />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/procura" element={<Procura />} />
                <Route path="/trabalhador" element={<Registrar2 />} />
                <Route path="/intermediador" element={<Registrar3 />} />
                <Route path="/empresa" element={<Registrar />} />
                <Route path="/cabecalho" element={<Cabecalho />} />
            </Routes>
        </BrowserRouter>
    );
}
