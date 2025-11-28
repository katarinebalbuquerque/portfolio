import Card from "../card/Card";
import ItemExperiencia from "./ItemExperiencia";

const Experiencia = () => {
    return (
        <section id="experiência">
            <Card>
                <section id="experiencia__descricao">
                    <h4>&#10148; Experiência</h4>
                    <hr /><br />
                    <ul style={{listStyle:"url('./images/correct.png')"}}>
                        <ItemExperiencia
                            data="set de 2024 - out de 2025"
                            cargo="Analista de Soluções"
                            empresa="Capgemini Brasil - RJ"
                            descricao="Case Types, Fluxos, App Studio, Dev Studio e Data Types."
                        />

                        <ItemExperiencia
                            data="jan de 2016 - mar de 2021"
                            cargo="Desenvolvedor de Front-End"
                            empresa="Autônomo - Freelance - RJ"
                            descricao="Desenvolvimento de Interfaces, Desenvolvimento de Sites e Desenvolvimento e Manutenção."
                        />

                        <ItemExperiencia
                            data="mai de 2009 - dez de 2015"
                            cargo="Auxiliar de Monitoramento"
                            empresa="Sunset Segurança e Vigilância - RJ"
                            descricao="Monitoramento de Alarmes, Monitoramento de Câmeras, Via Sistema CFTV e Atendimento Telefônico."
                        />

                        <ItemExperiencia
                            data="nov de 2000 - dez de 2002"
                            cargo="Teleoperador II"
                            empresa="Atento Brasil - RJ"
                            descricao="Atendimento Receptivo e Call Center."
                        />

                        <ItemExperiencia
                            data="mar de 1999 - set de 2000"
                            cargo="Estágio de Auxiliar de Escritório"
                            empresa="IASERJ - Hospital de Servidores - RJ"
                            descricao="Organização, Entrada e Saída, Rotinas Administrativas, Atendimento ao Público e Atendimento Telefônico."
                        />
                    </ul>
                </section>
            </Card>
        </section>
    )
}

export default Experiencia;