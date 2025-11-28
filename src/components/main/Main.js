import Container from "../container/Container";

const Main = ({ children }) => {
    return (
        <main id="main">
            <Container>
                <section className="row column-sd">
                    { children }
                </section>
            </Container>
        </main>
    )
}

export default Main;