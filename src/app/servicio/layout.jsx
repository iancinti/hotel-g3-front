
import * as React from 'react';
import Footer from "../components/footer";
import Header from "../components/header/header";
import imagen from "../../../public/images/banners/banner-service.jpg";




export const metadata = {
    title: "Servicios",
    description: "Generated by create next app",
};

export default function ServiceLayout({ children }) {
    return (
        <div>
            <Header bannerImg={imagen.src}></Header>
            {children}
            <Footer></Footer>
        </div>
    );

}