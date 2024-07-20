import Footer from "../components/footer";
import Header from "../components/header/header";


export const metadata = {
    title: 'Reserva'
}

function ReservaLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header bannerImg='images/banners/banner-reserva.png'></Header>
                {children}
                <Footer></Footer>
            </body>
        </html>        
    );
}

export default ReservaLayout;