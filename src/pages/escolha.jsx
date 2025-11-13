import '../style/escolha.scss'

export default  function Escolha(){

    return(

        <div className='container-escolha'>

            <h1>Hello World</h1>
      
    
                        <button>
                            <Link to="/empresa">
                                <h2>Entrar</h2>
                            </Link>
                        </button>
                 

                    <section>
                        <div className="Cartao">
                            <img
                                className="img-estado"
                                src="/src/assets/images/Mediador.png"
                                alt="Mediador"
                            />

                            <h2 className="sub-titulo inika-regular">
                                Mediador
                            </h2>
                            <img
                                className="img-selo"
                                src="/src/assets/images/Selo Mediador.png"
                                alt=""
                            />
                        </div>

                        <button>
                            <Link to="/intermediador">
                                <h2>Entrar</h2>
                            </Link>
                        </button>
                    </section>

                    <section>
                        <div className="Cartao">
                            <img
                                className="img-estado"
                                src="/src/assets/images/Empregado.png"
                                alt="Funcionario"
                            />

                            <h2 className="sub-titulo inika-regular">
                                Trabalhador
                            </h2>
                            <img
                                className="img-selo"
                                src="/src/assets/images/Selo Empregado.png"
                                alt=""
                            />
                        </div>
                        <button>
                            <Link to="/trabalhador">
                                <h2>Entrar</h2>
                            </Link>
                        </button>
                        
                    </section>
               </div>
        );
    }


