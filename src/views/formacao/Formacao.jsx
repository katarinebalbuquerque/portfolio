import Curso from "./Curso";

const Formacao = () => {
    return (
        <section id="formacao" className="col-12">
            <div className="container">
                <h2 className="titulo-h2">Formação</h2>
                <div className="barra"></div>
                <section className="imagem">
                    <img width="150" src="./images/formacao.png" alt="Habilidades"/>
                </section>
                <div className="row">
                    <Curso
                        local="Universidade Estácio de Sá"
                        curso="Desenvolvimento Java"
                        graduacao="Pós-graduação"
                        ano="2017"
                    />
                    <Curso
                        local="Universidade Estácio de Sá"
                        curso="Análise e Desenvolvimento de Sistemas"
                        graduacao="Tecnólogo"
                        ano="2015"
                    />
                </div>
            </div>
        </section>
    )
}

export default Formacao;