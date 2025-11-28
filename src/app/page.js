import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import Section from "@/components/sections/Section";
import Sobre from "@/components/sobre/Sobre";
import Destaque from "@/components/destaque/Destaque";
import Experiencia from "@/components/experiencia/Experiencia";
import Formacao from "@/components/formacao/Formacao";
import Projeto from "@/components/projeto/Projeto";
import Habilidade from "@/components/habilidade/Habilidade";
import Curso from "@/components/curso/Curso";
import Premios from "@/components/premios/Premios";
import Contato from "@/components/contato/Contato";

export default function Home() {
  return (
    <div id="page">
      <Nav/>
      <Main>
        <Section classe="main__content col-7 col-md-12 col-sd-12">
          <Header/>
          <Sobre/>
          <Destaque/>
          <Experiencia/>
          <Formacao/>
          <Projeto/>
        </Section>
        <Section classe="main__content col-3 col-md-12 col-sd-12">
          <Habilidade/>
          <Curso/>
          <Premios/>
          <Contato/>
        </Section>
      </Main>
      <Footer/>
    </div>
  );
}
