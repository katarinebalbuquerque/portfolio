import Link from "next/link";
import Card from "../card/Card";

const ItensProjetos = ({ src, titulo, descricao, href }) => {
    return (
        <section id="projeto__content" className="col-12 col-sd-12">
            <Card>
                <img width="300" src={ src } alt={ titulo } />
                <section className="projeto__descricao">    
                    <br/>           
                    <h3>{ titulo }</h3>
                    <br/>
                    <p>{ descricao }</p>
                    <br/>
                    <Link target="_blank" href={ href }>Saiba Mais</Link> 
                    <br/><br/>                    
                </section>
            </Card>
        </section>
    )
}

export default ItensProjetos;