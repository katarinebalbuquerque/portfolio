import Contato from "./Contato";

const Contatos = () => {
    return (
        <section id="contatos" className="col-12">
            <div className="container">
                <h2 className="titulo-h2">Contato</h2>
                <div className="barra"></div>
                <div className="row">
                    <Contato
                        nome="kba.2879@gmail.com"
                        link="mailto:kba.2879@gmail.com"
                        rede="E-mail"
                        target=""
                    />
                    <Contato
                        nome="/ katarine-albuquerque"
                        link="https://www.linkedin.com/in/katarine-albuquerque/"
                        rede="Linkedin"
                        target="_blank"
                    />
                    <Contato
                        nome="/ katarinebalbuquerque"
                        link="https://github.com/katarinebalbuquerque?tab=repositories"
                        rede="GitHub"
                        target="_blank"
                    />
                </div>
            </div>
        </section>
    )
}

export default Contatos;