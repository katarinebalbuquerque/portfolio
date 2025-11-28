"use client";

import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import "./../../app/globals.css";
import "./../../assets/css/styles.css";
import Main from "@/components/main/Main";
import Section from "@/components/sections/Section";
import HeaderBlog from "@/components/header/HeaderBlog";
import Contato from "@/components/contato/Contato";
import ItemProjetos from "@/components/projetos/ItemProjetos";
import Habilidade from "@/components/habilidade/Habilidade";
import Destaque from "@/components/destaque/Destaque";
import { useState } from "react";
import { projetos } from "@/data/data"; 

const Projetos = () => {
    
    const [data] = useState(projetos);

    return (
        <div id="page">
            <Nav />
            <Main>
                <Section classe="col-3 col-md-12 col-sd-12">
                    <HeaderBlog/>
                    <Contato/>
                    <Destaque/>                                      
                </Section>
                <Section classe="col-6 col-md-12 col-sd-12">
                    <Section classe="row">
                        {
                            data.length !== 0 ?
                            data.map(projeto => (
                                
                                    <ItemProjetos
                                        key={ projeto.id }                                     
                                        src={ projeto.imagem }
                                        titulo={ projeto.titulo }
                                        descricao={ projeto.descricao }
                                        href={ projeto.link }
                                    />
                                
                            ))
                            :
                            <Section classe="sem-projetos col-12">
                                <h3>Não há projetos no momento!</h3>
                                <h4>Tente mais tarde.</h4>
                            </Section>
                        }
                    </Section>
                </Section>
                <Section classe="col-3 col-md-12 col-sd-12">
                    <Habilidade/>                    
                </Section>
            </Main>
            <Footer />
        </div>
    )
}

export default Projetos;