import Footer from "../components/footer";
import Header from "../components/header/header";


export const metadata = {
    title: 'Mi Perfil',
}

function MiPerfilLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header></Header>
                { children }
                <Footer></Footer>
            </body>
        </html>
    );
}

export default MiPerfilLayout;