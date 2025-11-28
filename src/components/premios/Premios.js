import Card from "../card/Card";
import ItemPremios from "./ItemPremios";

const Premios = () => {
    return (
        <section id="premios">
            <Card>
                <section id="premios__descricao">
                    <h4>&#10148; Reconhecimentos e Pêmios</h4>
                    <hr/><br/>
                    <ul style={{listStyle:"url('./images/correct.png')"}}>
                        <ItemPremios
                            titulo="Concurso de Desenho"
                            local="Colégio Lemos de Castro - RJ"
                            descricao="Tema Natureza Viva, com premiação em 1º e 3º lugar na categoria de Segundo Grau."
                        />
                    </ul>
                </section>
            </Card>
        </section>
    )
}

export default Premios;