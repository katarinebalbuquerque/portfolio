import Card from "../card/Card";
import Item from "./Item";
import ItemHabilidade from "./ItemHabilidade";

const Habilidade = () => {
    return (
        <section id="habilidade">
            <Card>
                <section id="habilidade__descricao">
                    <h4>&#10148; Habilidades</h4>
                    <hr /><br />
                    <section className="row">
                        <ItemHabilidade titulo="Front-end">
                            <Item nome="HTML5" />
                            <Item nome="CSS" />
                            <Item nome="React Js" />
                            <Item nome="Wordpress" />
                        </ItemHabilidade>
                        <ItemHabilidade titulo="Back-end">
                            <Item nome="JavaScript" />
                            <Item nome="Express" />
                            <Item nome="Node Js" />
                            <Item nome="PHP" />
                            <Item nome="Java" />
                        </ItemHabilidade>
                        <ItemHabilidade titulo="Ferramentas & Outros">
                            <Item nome="Git" />
                            <Item nome="MySQL" />
                            <Item nome="PHPMyAdmin" />
                            <Item nome="VS Code" />
                            <Item nome="Next Js" />
                            <Item nome="Rest API" />
                        </ItemHabilidade>
                    </section>
                </section>
            </Card>
        </section>
    )
}

export default Habilidade;