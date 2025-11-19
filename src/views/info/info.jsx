const Info = () => {
    return (
        <section id="info">
            <div className="container">
                <div className="row">
                    <article id="perfil" className="col-6 col-sd-12">
                        <img width="300" src="./images/perfil.png" alt="Perfil" />
                    </article>
                    <article id="descricao" className="col-6 col-sd-12">
                        <h2 id="nome-h2">Katarine Albuquerque</h2>
                        <br />
                        <h4>Desenvolvedora</h4>
                        <h1><strong>FRONT-END</strong></h1>
                        <br />
                        <h5>❮ Bem vindo(a) ao meu <strong>Portfólio</strong>! /❯</h5>
                        <br />
                        <section id="buttons" className="row">
                            <a href="#projetos">Meus Projetos</a>
                            <a href="#contatos">Contato</a>
                        </section>
                    </article>
                </div>
                <section id="scroll">
                    <img width="55" src="./images/scroll2.png" alt="Scroll" />
                </section>
            </div>
        </section>
    )
}

export default Info;