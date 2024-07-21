import MenuComponent from "./menu";
import './header.css'

function Header({ bannerImg, backgroundColor }) {
    const display = (bannerImg) ? 'block' : 'none'

    return(
        <header className="hd">
            <div className="hd-banner" style={{ backgroundColor: backgroundColor }}> 
                
                
                <img
                    className="hd-banner-img"
                    src={bannerImg} alt="banner"
                    style={{ display }}
                />
            </div>
            <MenuComponent></MenuComponent>
        </header>
    );    
}

export default Header;