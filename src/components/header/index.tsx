import "../header/styles/style.scss"
import "../header/styles/styleMedia.scss"
import logo from "../../assets/images/Taxi-logo.png"

const Header = () => {
    return(
        <header className="header">
            <div className="header-wrapper">
                <img className = "header-img" src={logo} alt="logo" />
                <div className="header-phone__container">
                    <span className="header-phone">+375(33)3974844</span>
                    <span className="header-phone second">+375(44)7412269</span>
                </div>
            </div>
        </header>
    )
}
export default Header