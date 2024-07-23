import Footer from "../components/footer";
import Header from "../components/header/header";

export default function Registro({ children }) {
    return (
        <html lang="en">
            <body>
                <Header backgroundColor="var(--fondo)"></Header>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
