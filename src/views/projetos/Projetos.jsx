import Projeto from "./Projeto";

const Projetos = () => {
    return (
        <section id="projetos" className="col-12">
            <div className="container">
                <h2 className="titulo-h2">Projetos</h2>
                <div className="barra"></div>
                <div className="row">
                    <Projeto
                        imagem="./images/projetos/img-001.png"
                        titulo="Organizador de Tarefas"
                        descricao="Demonstra o uso de Context API para controlar o estado da aplicação, CSS modules para uma melhor organização e layout responsivo e bem estruturado."
                        link="https://github.com/katarinebalbuquerque/reactjs-organizador-de-tarefas"
                    />
                    <Projeto
                        imagem="./images/projetos/img-002.png"
                        titulo="Organizar Compras"
                        descricao="Realiza o cadastro e edição de dados, com upload de imagens; uso de rotas, API Node Js e Banco de Dados MySQL em React Js."
                        link="https://github.com/katarinebalbuquerque/ReactJs/tree/main/compras"
                    />
                    <Projeto
                        imagem="./images/projetos/img-003.png"
                        titulo="Calculadora"
                        descricao="Feito com HTML5, CSS e JavaScript, responsiva, dinâmica e organizada."
                        link="https://github.com/katarinebalbuquerque/JavaScript/tree/main/calculadora"
                    />
                    <Projeto
                        imagem="./images/projetos/img-004.png"
                        titulo="Sabor da Terra"
                        descricao="Navegação entre páginas com React Router Dom, uso de API fictícia em Json e Axios, controle de estados da aplicação com Redux e layout responsivo e organizado."
                        link="https://github.com/katarinebalbuquerque/reactjs-sabor-da-terra"
                    />
                </div>
                <section id="link-projetos" className="row">
                    <a target="_blank" href="https://github.com/katarinebalbuquerque?tab=repositories">Veja mais Projetos ❯</a>
                </section>
            </div>
        </section>
    )
}

export default Projetos;