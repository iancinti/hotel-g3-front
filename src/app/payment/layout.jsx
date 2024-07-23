import Footer from "../components/footer";
import Header from "../components/header/header";


export const metadata = {
    title: 'Booking'
}

function BookingLayout({ children }) {
    return (
        <>
            <Header bannerImg='banners/banner-reserva.png'></Header>
            {children}
            <Footer></Footer>
        </>
    );
}

export default BookingLayout;