import MenuComponent from "./menu";
import './header.css'

function Header({ bannerImg }) {
    const display = (bannerImg) ? 'block' : 'none'

    return(
        <header className="hd">
            <div className="hd-banner">
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