import Card from "../card/Card";
import ItemCurso from "./ItemCurso";

const Curso = () => {
    return (
        <section id="curso">
            <Card>
                <section id="curso__descricao">
                    <h4>&#10148; Cursos</h4>
                    <hr /><br />
                    <ul style={{listStyle:"url('./images/correct.png')"}}>
                        <ItemCurso
                            curso="Auxiliar de Escritório"
                            local="FAETEC"
                            horas="240h"
                        />
                        <ItemCurso
                            curso="Lógica de Programação"
                            local="SENAI"
                            horas="14h"
                        />
                        <ItemCurso
                            curso="Tecnologia da Informação e Comunicação "
                            local="SENAI"
                            horas="14h"
                        />
                    </ul>
                </section>
            </Card>
        </section>
    )
}

export default Curso;