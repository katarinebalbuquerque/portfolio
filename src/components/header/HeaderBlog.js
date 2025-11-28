import Card from "../card/Card";

const HeaderBlog = () => {
    return (
        <header id="header-blog">
            <Card>
                <section id="header-blog__banner" style={{backgroundImage: "url('./images/banner2.jpg')"}}>                    
                    <img id="header-blog__img_perfil" width="110" src="./images/perfil.png" alt="perfil"/>
                </section>
                <section id="header-blog__info" className="row-md column-sd">
                    <h2>Katarine Albuquerque</h2>
                    <br/>
                    <h5>Desenvolvedora<br/>FRONT-END</h5>
                </section>                
                <section id="header-blog__descricao">
                    <h4>Conhecimentos</h4>
                    <p>Pega Platform | React Js | Next Js | Wordpress</p>
                </section>
            </Card>
        </header>
    )
}

export default HeaderBlog;