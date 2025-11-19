import Habilidade from "./Habilidade";
import Item from "./Item";

const Habilidades = () => {
    return (
        <section id="habilidades"  className="col-12">
            <div className="container">
                <h2 className="titulo-h2">Habilidades</h2>
                <div className="barra"></div>
                <section className="imagem">
                    <img width="150" src="./images/habilidades.png" alt="Habilidades"/>
                </section>
                <div className="row">
                    <Habilidade titulo="FRONT-END">
                        <Item nome="HTML5"/>
                        <Item nome="CSS"/>
                        <Item nome="React Js"/>
                        <Item nome="Wordpress"/>
                    </Habilidade>
                    <Habilidade titulo="BACK-END">
                        <Item nome="JavaScript"/>
                        <Item nome="Express"/>
                        <Item nome="Node Js"/>
                        <Item nome="PHP"/>
                        <Item nome="Java"/>
                    </Habilidade>
                    <Habilidade titulo="FERRAMENTAS & OUTROS">
                        <Item nome="Git"/>
                        <Item nome="MySQL"/>
                        <Item nome="PHPMyAdmin"/>
                        <Item nome="VS Code"/>
                        <Item nome="Rest API"/>
                    </Habilidade>
                    <div className="hab habilidade col-6 col-m-6 col-sd-12"></div>
                </div>
            </div>
        </section>
    )
}

export default Habilidades;