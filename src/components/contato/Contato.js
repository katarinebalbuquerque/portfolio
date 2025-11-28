import Card from "../card/Card";
import ItemContato from "./ItemContato";

const Contato = () => {
    return (
        <section id="contato">
            <Card>
                <section id="contato__descricao">
                    <h4>&#10148; Contato</h4>
                    <hr/><br/>
                    <ul>
                        <ItemContato
                            src="./images/email.png"
                            titulo="E-mail"
                            nome="kba.2879@gmail.com"
                            href="mailto:kba.2879@gmail.com"
                        />
                        <ItemContato
                            src="./images/linkedin.png"
                            titulo="Linkedin"
                            nome="/katarine-albuquerque"
                            href="https://www.linkedin.com/in/katarine-albuquerque/"
                            target="_blank"
                        />
                        <ItemContato
                            src="./images/git.png"
                            titulo="GitHub"
                            nome="/katarinebalbuquerque"
                            href="https://github.com/katarinebalbuquerque?tab=repositories"
                            target="_blank"
                        />
                    </ul>
                </section>
            </Card>
        </section>
    )
}

export default Contato;