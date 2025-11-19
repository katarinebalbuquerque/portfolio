const Nav = () => {
    return (
        <nav id="nav">
            <div className="container">
                <div className="row">
                    <section id="logo" className="col col-md-12 col-sd-12">
                        <img width="60" src="/images/logo-branco.png" alt="Logo"/>
                    </section>
                    <section className="col-6 col-md-6 col-sd-12">
                        <ul id="menu" className="row">
                            <li><a href="/">Home</a></li>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#projetos">Projetos</a></li>
                            <li><a href="#contatos">Contato</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </nav>
    )
}

export default Nav;