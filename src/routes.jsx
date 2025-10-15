import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./pages/inicio";
import Escolha from "./pages/escolha";
import Registrar from "./pages/registrar";
import Chat from "./pages/chat";
import Entrar from "./pages/entrar";
import Redefinir from "./pages/redefinir";
import Perfil from "./pages/perfil";


export default function Navegar(){
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Inicio />} />
                <Route path="/escolha" element={<Escolha />} />
                <Route path="/registrar" element={<Registrar/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/entrar" element={<Entrar/>} />
                <Route path="/redefinir" element={<Redefinir/>} />
                <Route path="/perfil" element={<Perfil/>} />
            
            </Routes>
        </BrowserRouter>
    )
}