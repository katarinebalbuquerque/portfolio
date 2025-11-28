"use client";

import { useState } from "react";
import Container from "../container/Container";

const Nav = () => {

    const [aberto, setAberto] = useState(false);

    const handlerAbrirFecharMenu = () => {
        setAberto(!aberto);
    }

    return (
        <nav id="nav">
            <Container>
                <section id="nav__content" className="row">
                    <article className="col-3">
                        <a href="/"><img width="150" src="./images/logo.png" alt="Logo"/></a>
                        <button id="nav__button" type="button" onClick={handlerAbrirFecharMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </article>
                    <article className="col-7">
                        <ul id="menu" className={aberto ? "row menu-aberto" : "row menu-fachado"}>
                            <li><a href="/">Home</a></li>
                            <li><a href="#destaque">Destaque</a></li>
                            <li><a href="/projetos">Projetos</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </article>
                </section>
            </Container>    
        </nav>
    )
}

export default Nav;