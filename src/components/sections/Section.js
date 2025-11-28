const Section = ({ children, classe }) => {
    return (
        <section className={classe}>
            { children }
        </section>
    )
}

export default Section;