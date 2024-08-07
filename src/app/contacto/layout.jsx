import Footer from "../components/footer";
import Header from "../components/header/header";

export const metadata = {
    title: "Contactanos",
    description: "Generated by create next app",
};

export default function ContactLayout({ children }) {
    return (
        <>
            <Header bannerImg='banners/banner-contact.png'></Header>
            {children}
            <Footer></Footer>
        </>
    );

}
