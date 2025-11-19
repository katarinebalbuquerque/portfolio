import Contatos from "../contatos/Contatos";
import Experiencias from "../experiencias/Experiencias";
import Formacao from "../formacao/Formacao";
import Habilidades from "../habilidades/Habilidades";
import Info from "../info/info";
import Projetos from "../projetos/Projetos";
import Sobre from "../sobre/Sobre";

const Home = () =>{
    return (
        <section id="home" className="col-12">
            <Info/>
            <Sobre/>
            <Habilidades/>
            <Formacao/>
            <Experiencias/>
            <Projetos/>
            <Contatos/>
        </section>
    )
}

export default Home;