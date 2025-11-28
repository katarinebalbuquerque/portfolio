import Link from "next/link";
import Card from "../card/Card";
import ItemProjeto from "./ItemProjeto";

const Projeto = () => {
    return (
        <section id="projeto">
            <Card>
                <section id="projeto__descricao">
                    <h4>&#10148; Projetos</h4>
                    <hr/><br/>
                    <ul>
                        <ItemProjeto
                            src="./images/projetos/img-001.png"
                            titulo="Organizador de Tarefas"
                            descricao="Desenvolvido com React Js e Vite."
                            link="https://github.com/katarinebalbuquerque/reactjs-organizador-de-tarefas"
                        />                        
                        <ItemProjeto
                            src="./images/projetos/img-002.png"
                            titulo="Organizar Compras"
                            descricao="Desenvolvido com React Js e Vite."
                            link="https://github.com/katarinebalbuquerque/ReactJs/tree/main/compras"
                        />
                        <ItemProjeto
                            src="./images/projetos/img-003.png"
                            titulo="Calculadora"
                            descricao="Desenvolvido com HTML5, CSS e JavaScript."
                            link="https://github.com/katarinebalbuquerque/JavaScript/tree/main/calculadora"
                        />
                        <ItemProjeto
                            src="./images/projetos/img-004.png"
                            titulo="Sabor da Terra"
                            descricao="Desenvolvido com ReactJs e Vite."
                            link="https://github.com/katarinebalbuquerque/reactjs-sabor-da-terra"
                        />
                    </ul>
                    <article id="projeto__link">
                        <Link href="/projetos">Veja Mais Projetos &#10095;</Link>
                    </article>
                </section>
            </Card>
        </section>
    )
}

export default Projeto;