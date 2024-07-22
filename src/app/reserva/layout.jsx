import Footer from "../components/footer";
import Header from "../components/header/header";


export const metadata = {
    title: 'Reserva'
}

function ReservaLayout({ children }) {
    return (
        <>
            <Header bannerImg='/images/banners/banner-reserva.png'></Header>
            {children}
            <Footer></Footer>
        </>       
    );
}

export default ReservaLayout;