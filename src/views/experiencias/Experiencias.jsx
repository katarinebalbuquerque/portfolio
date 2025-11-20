import Atividade from "./Atividade";
import Experiencia from "./Experiencia";

const Experiencias = () =>{
    return (
        <section id="experiencias" className="col-12">
            <div className="container">
                <h2 className="titulo-h2">Experiências</h2>
                <div className="barra"></div>
                <section className="imagem">
                    <img width="150" src="./images/experiencias.png" alt="Habilidades"/>
                </section>
                <div className="row">
                    <Experiencia
                        data="set/ 2024 à out/ 2025"
                        cargo="Pega Platform"
                        empresa="Capgemini Brasil"                        
                    >
                        <Atividade nome="Case Types"/>
                        <Atividade nome="Fluxos"/>
                        <Atividade nome="Data Type"/>
                        <Atividade nome="App Studio"/>
                        <Atividade nome="Dev Studio"/>
                        <Atividade nome="UI/UX"/>
                    </Experiencia>
                    <Experiencia
                        data="jan/ 2016 à mar/ 2021"
                        cargo="Desenvolvimento Front-End"
                        empresa="Autônomo"
                    >
                        <Atividade nome="Desenvolvimento de Interfaces"/>
                        <Atividade nome="Desenvolvimento de Sites"/>
                        <Atividade nome="Desenvolvimento e Manutenção"/>
                    </Experiencia>
                    <Experiencia
                        data="mai/ 2009 à dez/ 2015"
                        cargo="Auxiliar de Monitoramento"
                        empresa="Sunset Segurança e Vigilância Ltda"
                    >
                        <Atividade nome="Monitoramento de Alarmes"/>
                        <Atividade nome="Monitoramento de Câmeras"/>
                        <Atividade nome="Via Sistema CFTV"/>
                        <Atividade nome="Atendimento Telefônico"/>
                    </Experiencia>
                    <Experiencia
                        data="nov/ 2000 à dez/ 2002"
                        cargo="Teleoperador"
                        empresa="Atento Brasil S.A."
                    >
                        <Atividade nome="Atendimento Receptivo"/>
                        <Atividade nome="Call Center"/>
                    </Experiencia>
                    <Experiencia
                        data="mai/ 1999 à set/ 2000"
                        cargo="Estágio de Auxiliar de Escritório"
                        empresa="IASERJ - Hospital dos Servidores"
                    >
                        <Atividade nome="Organização"/>
                        <Atividade nome="Entrada e Saída"/>
                        <Atividade nome="Rotinas Administrativas"/>
                        <Atividade nome="Atendimento ao Público"/>
                        <Atividade nome="Atendimento Telefônico"/>
                    </Experiencia>
                    <div className="exp col-6 col-m-6 col-sd-12"></div>
                </div>
            </div>
        </section>
    )
}

export default Experiencias;