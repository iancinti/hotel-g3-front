import Footer from "../components/footer";
import Header from "../components/header/header";


export const metadata = {
    title: 'Mi Perfil',
}

function MiPerfilLayout({ children }) {
    return (
        <>
                <Header></Header>
                { children }
                <Footer></Footer>
           
        </>
    );
}

export default MiPerfilLayout;