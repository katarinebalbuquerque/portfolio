const Card = ({ children }) => {
    return (
        <article className="card">            
            <section className="content">
                { children }
            </section>
        </article>
    )
}

export default Card;