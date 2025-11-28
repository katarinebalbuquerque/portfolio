import Card from "../card/Card";
import ItemFormacao from "./ItemFormacao";

const Formacao = () => {
    return (
        <section id="formacao">
            <Card>
                <section id="formacao__descricao">
                    <h4>&#10148; Formação Acadêmica</h4>
                    <hr /><br />
                    <ul style={{listStyle:"url('./images/correct.png')"}}>
                        <ItemFormacao
                            local="Universidade Estácio de Sá"
                            curso="Pós-graduação em Desenvolvimento Java"
                            data1="set de 2015"
                            data2="set de 2017"
                        />

                        <ItemFormacao
                            local="Universidade Estácio de Sá"
                            curso="Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas"
                            data1="jul de 2011"
                            data2="ago de 2015"
                        />
                    </ul>
                </section>
            </Card>
        </section>
    )
}

export default Formacao;