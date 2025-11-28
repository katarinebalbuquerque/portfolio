import Card from "../card/Card";

const Header = () => {
    return (
        <header id="header">
            <Card>
                <section id="header__banner" style={{backgroundImage: "url('./images/banner2.jpg')"}}>
                    <h4>A Tecnologia<br/>Transformando<br/> o Futuro</h4>
                    <img id="header__img_perfil" width="150" src="./images/perfil.png" alt="perfil"/>
                </section>
                <section id="header__info" className="row column-sd">
                    <h1>Katarine Albuquerque</h1>
                    <h5>Desenvolvedora<br/>FRONT-END</h5>
                </section>                
                <section id="header__descricao">
                    <h4>Conhecimentos</h4>
                    <p>Pega Platform | React Js | Next Js | Wordpress</p>
                </section>
            </Card>
        </header>
    )
}

export default Header;