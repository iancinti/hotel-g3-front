import MenuComponent from "./menu";
import Image from 'next/image'
import './header.css'

function Header({ bannerImg, backgroundColor }) {
    const display = (bannerImg) ? 'block' : 'none'

    return(
        <header className="hd">
            <div className="hd-banner" style={{ backgroundColor: backgroundColor }}> 
                
                
                <Image
                    className="hd-banner-img"
                    src={bannerImg} alt="banner"
                    width={100}
                    height={100}
                    style={{ display }}
                />
            </div>
            <MenuComponent></MenuComponent>
        </header>
    );    
}

export default Header;